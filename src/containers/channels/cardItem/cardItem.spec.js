import {CardItem} from './index';
import {BasePageObject} from '../../../utils/pageObjectBase';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(CardItem, 'CardItem');
    this.setDefaultRenderStrategy('shallow');
    this.setDefaultPropCassette(({text}) => ({
      children: text
    }));
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
}

describe('CardItem', () => {
  it('renders children content', () => {
    const pageObject = new PageObject();
    pageObject.didRenderChildren();
    expect(pageObject.tree).toMatchSnapshot();
  });
});
