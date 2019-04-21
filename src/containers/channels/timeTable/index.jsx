import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import {NowButton} from '../nowButton';
import {TimeScale} from '../timeScale';
import {Button} from '../../../components/button';
import styles from './timeTable.css';
import {DAY_TIMES, MINUTES_TO_PX} from '../../../constants';

export class TimeTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  handleNow = () => {
    const {currentTime} = this.props;
    const width = this.tableRef.current.offsetWidth;
    this.tableRef.current.scrollTo(currentTime * MINUTES_TO_PX + 31 - width / 2, 0);
  };

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

  isActiveTimeSlot = (schedule) => {
    const {currentTime} = this.props;
    return currentTime >= schedule.startInMinutes && currentTime < schedule.endInMinutes;
  };

  renderSchedules = ({id, schedules, images: {logo}}) => {
    return (
      <tr
        key={id}
        className={styles.schedules}
      >
        {
          this.renderChannel({id, logo})
        }
        <td
          colSpan={DAY_TIMES.length}
        >
          <section
            className={styles.schedule}
          >
            {
              schedules.map(x => (
                <Button
                  key={x.id + x.duration + x.start}
                  className={cx(styles.timeSlot, this.isActiveTimeSlot(x) && styles.timeSlot__active)}
                  style={{minWidth: x.duration * MINUTES_TO_PX, maxWidth: x.duration * MINUTES_TO_PX}}
                >
                  <section>{x.title}</section>
                  <section>{moment(x.start).format('HH:mm')}-{moment(x.end).format('HH:mm')}</section>
                </Button>
              ))
            }
          </section>
        </td>
      </tr>
    )
  };

  renderTimeStamp = () => {
    const {currentTime, channels} = this.props;
    return (
      <section
        className={styles.timeStamp}
        style={{left: currentTime * MINUTES_TO_PX + 67}}
      >
        <section
          style={{height: 66 * channels.length + 1}}
          className={styles.timeStampBody}/>
      </section>
    )
  };

  render() {
    const {channels, currentTime} = this.props;
    return (
      <section ref={this.tableRef} className={styles.container}>
        <table className={styles.table}>
          <TimeScale currentTime={currentTime} times={DAY_TIMES}/>
          <tbody>
          {
            channels.map(this.renderSchedules)
          }
          </tbody>
        </table>
        {
          this.renderTimeStamp()
        }
        <NowButton onClick={this.handleNow}/>
      </section>
    );
  }
}