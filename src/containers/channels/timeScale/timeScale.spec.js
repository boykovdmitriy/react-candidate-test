import {TIME_STAMP_BODY_OFFSET, TimeScale} from './index';
import {BasePageObject} from '../../../utils/pageObjectBase';
import {DAY_TIMES, MINUTES_TO_TABLE_PX} from '../../../constants';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(TimeScale, 'TimeScale');
    this.defElement('timeSlot', 'Button');
    this.setDefaultRenderStrategy('shallow');
    this.setDefaultPropCassette(({times, currentTime}) => ({
      times,
      currentTime
    }));
  }

  $$initData() {
    return {
      times: DAY_TIMES,
      currentTime: 18 * 60 + 14,
    }
  }
}

describe('TimeScale', () => {
  it('renders correctly', () => {
    const pageObject = new PageObject();
    const {currentTime} = pageObject.data;
    const hour = Math.trunc(currentTime / 60);
    const minutes = currentTime % 60;
    const timeSlot = pageObject.tree.find(`[data-item="timeSlot-${hour}"]`);

    expect(
      timeSlot
        .find(`[data-item="timeStamp__header"]`)
        .props()
        .style.left).toEqual(MINUTES_TO_TABLE_PX * minutes);
    expect(
      timeSlot
        .find(`[data-item="timeStamp__body"]`)
        .props()
        .style.left).toEqual(MINUTES_TO_TABLE_PX * minutes + TIME_STAMP_BODY_OFFSET);

    expect(pageObject.tree).toMatchSnapshot();
  });
});
