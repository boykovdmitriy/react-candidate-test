import React from 'react';
import styles from './timeScale.css';

function generateTime() {
  const result = [];
  for (let i = 0; i < 24; i++) {
    result.push(i < 10 ? `0${i}:00` : `${i}:00`);
  }
  result.push('23:59');
  return result;
}

const times = generateTime();

export class TimeScale extends React.PureComponent {

  renderTimeSlot = (time) => (
    <section key={time} className={styles.timeSlot}>
      {time}
    </section>
  );

  render() {
    console.log(times);
    return (
      <section className={styles.container}>
        {times.map(this.renderTimeSlot)}
      </section>
    );
  }
}