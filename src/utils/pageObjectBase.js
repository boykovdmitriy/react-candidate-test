import React from 'react';
import _ from 'lodash';
import { shallow, mount } from 'enzyme';

const RENDER_STRATEGIES = Object.freeze({
  shallow: (Component, props) => shallow(<Component {...props} />),
  mount: (Component, props) => mount(<Component {...props} />),
});

export class BasePageObject {
  constructor({
                props = {},
                renderStrategy,
              } = {}) {
    this.instanceMocks = [];
    this.propMocks = [];
    this.mocks = {};
    this.customProps = props;
    this.renderStrategy = renderStrategy;
    this.elements = {};

    this.$$register();
    this.data = Object.freeze(this.$$initData());
    this.__buildPropCassette();
    this.__bindPropMocks();
    this.__render();
    this.__bindInstanceMocks();
  }

  $$register() {
    throw new Error('implement $$register hook in your pageObject class');
  }

  $$initData() {
    return {};
  }

  instance() {
    if (this.instanceSelector) {
      return this.tree.find(this.instanceSelector).instance();
    }
    return this.tree.instance();
  }

  setCustomInstanceProps(customProps) {
    this.instance().props = { ...this.instance().props, ...customProps };
  }

  defElement(name, selector) {
    if (this.elements[name]) {
      throw new Error('this element is already defined, name should be uniq');
    }
    this.elements[name] = () => this.tree.find(selector);
  }

  setDefaultRenderStrategy(renderStrategy) {
    if (this.renderStrategy) { return; }
    this.renderStrategy = renderStrategy;
  }

  setComponent(component, instanceSelector) {
    if (this.component) { throw new Error('component already registered'); }
    this.component = component;
    this.instanceSelector = instanceSelector;
  }

  setDefaultPropCassette(cassette) {
    if (this.defaultPropCassette) { throw new Error('defaultPropCassette already defined'); }
    this.defaultPropCassette = cassette;
  }

  mockProp(name, callback = _.noop) {
    if (this.mocks[name]) { throw new Error('mock is already defined'); }
    this.propMocks.push({ name, callback });
  }

  __buildPropCassette() {
    const cassette = this.defaultPropCassette;
    if (!cassette) { throw new Error(`no default cassette`); }
    this.props = Object.freeze(cassette(this.data));
  }

  __bindPropMocks() {
    const props = this.propMocks.reduce((acc, { name: key, callback }) => {
      this.mocks[key] = jest.fn(callback);
      acc[key] = this.mocks[key];
      return acc;
    }, {});

    this.props = { ...this.props, ...props };
  }

  __bindInstanceMocks() {
    if (this.renderStrategy === 'shallow') {
      if (!_.isEmpty(this.instanceMocks)) {
        throw new Error('You can not mock props when you are using SHALLOW render strategy');
      }
      return;
    }
    if (!this.instanceMocks.length) { return; }
    const instanceProps = this.instanceMocks.reduce((acc, key) => {
      this.mocks[key] = jest.fn(this.instance().props[key]);
      acc[key] = this.mocks[key];
      return acc;
    }, {});
    this.setCustomInstanceProps(instanceProps);
  }

  __render() {
    if (!this.component) { throw new Error('define component in  already $$register hook'); }
    if (!this.renderStrategy) {
      throw new Error('define render strategy either via setDefaultRenderStrategy in $register hook of via contructor passing in renderStrategy key.');
    }
    const strategy = RENDER_STRATEGIES[this.renderStrategy];
    if (!strategy) {
      throw new Error(`passed strategy is not supported ${this.renderStrategy}. Pass one of: ${Object.keys(RENDER_STRATEGIES)}`);
    }
    const customProps = _.isFunction(this.customProps)
      ? this.customProps(this.data)
      : this.customProps;
    this.tree = strategy(
      this.component,
      { ...this.props, ...customProps },
    );
  }
}
