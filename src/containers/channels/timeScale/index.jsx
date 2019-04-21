import React from 'react';
import styles from './timeScale.css';

export class TimeScale extends React.PureComponent {
  render() {
    const {times} = this.props;
    return (
      <thead>
      <tr>
        <th className={styles.timeSlot}/>
        {
          times.map(time => (
            <th key={time} className={styles.timeSlot}>
              <section
                className={styles.timeValue}
              >
                {time}
              </section>
              <section
                className={styles.separation}
              />
            </th>
          ))
        }
      </tr>
      </thead>
    );
  }
}