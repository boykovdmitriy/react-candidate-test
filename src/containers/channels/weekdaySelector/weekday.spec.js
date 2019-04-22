import {WeekdaySelector} from './index';
import {BasePageObject} from '../../../utils/pageObjectBase';
import styles from './weekdaySelector.css';
import {CURRENT_WEEKDAYS, WEEKDAY_FORMAT} from '../../../constants';

class PageObject extends BasePageObject {
  $$register() {
    this.setComponent(WeekdaySelector, 'WeekdaySelector');
    this.defElement('weekdayElement', 'Button');
    this.setDefaultRenderStrategy('mount');
    this.setDefaultPropCassette(({weekdays, selectedWeekday}) => ({
      weekdays,
      selectedWeekday
    }));
    this.mockProp('onDayChanged');
  }

  $$initData() {
    return {
      weekdays: CURRENT_WEEKDAYS,
      selectedWeekday: CURRENT_WEEKDAYS[0].format(WEEKDAY_FORMAT),
    }
  }

  isDaySelected(day) {
    return this.tree.find(`[data-element="${day.toString()}"]`).at(1).hasClass(styles.weekDay__active);
  }

  selectDay(day) {
    this.tree.find(`[data-element="${day.toString()}"]`).at(1).simulate('click');
  }

  isOnlyOneDayActive() {
    const {weekdays, selectedWeekday} = this.data;
    weekdays.forEach(x => {
      if (x.format(WEEKDAY_FORMAT) === selectedWeekday) {
        expect(this.isDaySelected(x)).toBeTruthy();
      } else {
        expect(this.isDaySelected(x)).toBeFalsy();
      }
    })
  }
}

describe('WeekdaySelector', () => {
  it('renders correctly', () => {
    const pageObject = new PageObject();
    pageObject.isOnlyOneDayActive();
  });

  it('change selected day', () => {
    const pageObject = new PageObject();
    pageObject.selectDay(CURRENT_WEEKDAYS[1]);

    expect(pageObject.mocks.onDayChanged).toBeCalledWith(CURRENT_WEEKDAYS[1]);
  });
});
