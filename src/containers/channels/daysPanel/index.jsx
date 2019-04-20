import React from 'react';
import {Button} from '../../../components/button';
import styles from './daysPanel.css';

export class DaysPanel extends React.PureComponent {
  renderWeekDay = (day) => {
    const date = day.format('DD.MM');
    const weekday = day.format('ddd');
    return (
      <Button
        key={date}
        className={styles.weekDay}
      >
        <section>{weekday}</section>
        <section>{date}</section>
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