import React from 'react';
import styles from './timeScale.css';
import {MINUTES_TO_TABLE_PX, TIME_STAMP_BODY_WIDTH, TIME_STAMP_HEADER_WIDTH} from '../../../constants';

export const TIME_STAMP_BODY_OFFSET = (TIME_STAMP_HEADER_WIDTH - TIME_STAMP_BODY_WIDTH) / 2;

export class TimeScale extends React.PureComponent {

  renderTimeStamp() {
    const {currentTime} = this.props;
    const minutes = currentTime % 60;

    return (
      <>
        <section
          style={{left: MINUTES_TO_TABLE_PX * minutes}}
          className={styles.timeStamp__header}
          data-item="timeStamp__header"
        />
        <section
          style={{left: MINUTES_TO_TABLE_PX * minutes + TIME_STAMP_BODY_OFFSET}}
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