import React from 'react';
import styles from './timeScale.css';
import {calculateTimeStampHeaderMetrics} from '../utils';

export class TimeScale extends React.PureComponent {

  renderTimeStamp() {
    const {currentTime} = this.props;
    const {headerPosition, bodyPiecePosition} = calculateTimeStampHeaderMetrics(currentTime);
    return (
      <>
        <section
          style={{left: headerPosition}}
          className={styles.timeStamp__header}
          data-item="timeStamp__header"
        />
        <section
          style={{left: bodyPiecePosition}}
          className={styles.timeStamp__body}
          data-item="timeStamp__body"
        />
      </>
    )
  }

  render() {
    const {times, currentTime} = this.props;
    const hour = Math.trunc(currentTime / 60);
    return (
      <thead>
      <tr>
        <th className={styles.timeSlot}/>
        {
          times.map((time, i) => (
            <th
              key={time}
              className={styles.timeSlot}
              data-item={`timeSlot-${i}`}
            >
              <section
                className={styles.timeValue}
              >
                {time}
              </section>
              <section
                className={styles.timeTick}
              />
              {
                i === hour && this.renderTimeStamp()
              }
            </th>
          ))
        }
      </tr>
      </thead>
    );
  }
}