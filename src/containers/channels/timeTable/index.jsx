import React from 'react';
import {TimeScale} from '../timeScale';
import styles from './timeTable.css';

function generateTime() {
  const result = [];
  for (let i = 0; i < 24; i++) {
    result.push(i < 10 ? `0${i}:00` : `${i}:00`);
  }
  return result;
}

const times = generateTime();
const minuteToPx = 240 / 60;

export class TimeTable extends React.PureComponent {

  renderChannel = ({id, logo}) => (
    <th
      className={styles.channel}
      key={id}
    >
      <img
        className={styles.channelLogo}
        src={logo}
      />
    </th>
  );

  renderSchedules = ({id, schedules, images: {logo}}) => {
    return (
      <tr
        key={id}
      >
        {
          this.renderChannel({id, logo})
        }
        <td
          colSpan={times.length}
        >
          <section
            className={styles.schedule}
          >
            {
              schedules.map(x => (
                <section
                  key={x.id + x.duration + x.start}
                  className={styles.timeSlot}
                  style={{width: x.duration * minuteToPx}}
                >
                  {x.title}
                </section>
              ))
            }
          </section>
        </td>
      </tr>
    )
  };

  render() {
    const {channels} = this.props;
    return (
      <section className={styles.container}>
        <table className={styles.table}>
          <TimeScale times={times}/>
          <tbody>
          {
            channels.map(this.renderSchedules)
          }
          </tbody>
        </table>
      </section>
    );
  }
}