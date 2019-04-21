import React from 'react';
import styles from './timeScale.css';

const minuteToPx = 240 / 60;

export class TimeScale extends React.PureComponent {
  render() {
    const {times, currentTime} = this.props;
    const hour = Math.trunc(currentTime / 60);
    const minutes = currentTime % 60;
    return (
      <thead>
      <tr>
        <th className={styles.timeSlot}/>
        {
          times.map((time, i) => (
            <th key={time} className={styles.timeSlot}>
              <section
                className={styles.timeValue}
              >
                {time}
              </section>
              <section
                className={styles.separation}
              />
              {
                i === hour && (
                  <>
                    <section
                      style={{left: minuteToPx * minutes - 2}}
                      className={styles.timeStampHeader}
                    />
                    <section
                      style={{left: minuteToPx * minutes + 1}}
                      className={styles.timeStampBody}
                    />
                  </>
                )
              }
            </th>
          ))
        }
      </tr>
      </thead>
    );
  }
}