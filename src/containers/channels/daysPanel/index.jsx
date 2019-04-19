import React from 'react';
import {Button} from '../../../components/button';

export class DaysPanel extends React.PureComponent {
  renderWeekDay = (day) => {
    const date = day.format('DD.MM');
    const weekday = day.format('ddd');
    return (
      <Button key={date}>
        {date}
        {weekday}
      </Button>
    )
  };

  render() {
    const {weekdays} = this.props;
    return (
      <section>
        {
          weekdays.map(this.renderWeekDay)
        }
      </section>
    );
  }
}