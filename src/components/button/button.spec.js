import {Button} from './index';
import {BasePageObject} from '../../utils/pageObjectBase';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(Button, 'Button');
    this.setDefaultRenderStrategy('shallow');
    this.setDefaultPropCassette(({text}) => ({
      children: text
    }));
    this.mockProp('onClick');
  }

  $$initData() {
    return {
      text: 'some useful information',
    }
  }

  didRenderChildren() {
    const {text} = this.data;
    expect(this.tree.text()).toEqual(text);
  }

  click() {
    this.tree.simulate('click');
  }
}

describe('Button', () => {
  it('renders children content', () => {
    const pageObject = new PageObject();
    pageObject.didRenderChildren();
    expect(pageObject.tree).toMatchSnapshot();
  });

  it('button fire an action by clicking', () => {
    const pageObject = new PageObject();
    pageObject.click();

    expect(pageObject.mocks.onClick).toBeCalled();
  });
});
