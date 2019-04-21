import React from 'react';
import cx from 'classnames';
import {Button} from '../../../components/button';
import styles from './weekdaySelector.css';

export class WeekdaySelector extends React.PureComponent {
  renderWeekDay = (day) => {
    const {selectedWeekday} = this.props;
    const date = day.format('DD.MM');
    const weekday = day.format('ddd');
    return (
      <Button
        key={date}
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