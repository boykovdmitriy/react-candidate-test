import React from 'react';
import cx from 'classnames';
import {Button} from '../../../components/button';
import styles from './weekdaySelector.css';
import {SHORT_DATE_FORMAT, WEEKDAY_FORMAT} from '../../../constants';

export class WeekdaySelector extends React.PureComponent {
  renderWeekDay = (day) => {
    const {selectedWeekday, onDayChanged} = this.props;
    const date = day.format(SHORT_DATE_FORMAT);
    const weekday = day.format(WEEKDAY_FORMAT);
    return (
      <Button
        key={date}
        data-element={day.toString()}
        onClick={() => onDayChanged(day)}
        className={cx(styles.weekDay, selectedWeekday === weekday && styles.weekDay__active)}
      >
        <span>{weekday}</span>
        <span>{date}</span>
      </Button>
    )
  };

  render() {
    const {weekdays} = this.props;
    return (
      <section className={styles.container}>
        {
          weekdays.map(this.renderWeekDay)
        }
      </section>
    );
  }
}