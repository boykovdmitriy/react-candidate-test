import React from 'react';
import {TimeScale} from '../timeScale';
import styles from './timeTable.css';

const minuteToPx = 480/60;

export class TimeTable extends React.PureComponent {
  renderChannel = ({id, images: {logo}}) => (
    <section
      className={styles.channel}
      key={id}
    >
      <img
        className={styles.channelLogo}
        src={logo}
      />
    </section>
  );

  renderSchedules = ({id, schedules}) => {
    return (
      <section
        key={id}
        className={styles.schedules}
      >
        {schedules.map(x => (
          <section
            key={x.id+x.duration+x.start}
            className={styles.timeSlot}
            style={{width: x.duration*minuteToPx}}
          >
            {x.title}
          </section>
        ))}
      </section>
    )
  };

  render() {
    const {channels} = this.props;
    return (
      <section className={styles.container}>
        <TimeScale/>
        <section className={styles.channels}>
          {
            channels.map(this.renderChannel)
          }
        </section>
        <section>
          {
            channels.map(this.renderSchedules)
          }
        </section>
      </section>
    );
  }
}