import {Footer} from './index';
import {BasePageObject} from '../../utils/pageObjectBase';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(Footer, 'Footer');
    this.setDefaultRenderStrategy('shallow');
    this.setDefaultPropCassette(({text, className}) => ({
      children: text,
      className
    }));
  }

  $$initData() {
    return {
      text: 'some useful information',
      className: 'customClassName'
    }
  }

  didRenderChildren() {
    const {text} = this.data;
    expect(this.tree.text()).toEqual(text);
  }

  didRenderWithClassName() {
    const {className} = this.data;
    expect(this.tree.props().className).toEqual(className);
  }
}

describe('Footer', () => {
  it('renders correctly', () => {
    const pageObject = new PageObject();
    pageObject.didRenderChildren();
    pageObject.didRenderWithClassName();
    expect(pageObject.tree).toMatchSnapshot();
  });
});
