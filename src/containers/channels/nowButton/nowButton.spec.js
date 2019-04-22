import {NowButton} from './index';
import {BasePageObject} from '../../../utils/pageObjectBase';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(NowButton, 'NowButton');
    this.setDefaultRenderStrategy('shallow');
    this.setDefaultPropCassette(({}) => ({}));
    this.mockProp('onClick');
  }

  $$initData() {
    return {};
  }

  click() {
    this.tree.simulate('click');
  }
}

describe('NowButton', () => {
  it('button fire an action by clicking', () => {
    const pageObject = new PageObject();
    pageObject.click();

    expect(pageObject.mocks.onClick).toBeCalled();
    expect(pageObject.tree).toMatchSnapshot();
  });
});
