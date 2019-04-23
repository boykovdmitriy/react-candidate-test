import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import {NowButton} from '../nowButton';
import {TimeScale} from './timeScale';
import {Button} from '../../../components/button';
import styles from './programTable.css';
import {
  DAY_TIMES,
  MINUTES_TO_TABLE_PX,
  TIME_FORMAT
} from '../../../constants';
import {calculateNowPosition, calculateTimeStampBodyMetrics} from './utils';

export class ProgramTable extends React.PureComponent {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }

  isProgramActive = (program) => {
    const {currentTime} = this.props;
    return currentTime >= program.startInMinutes && currentTime < program.endInMinutes;
  };

  handleNow = () => {
    const {currentTime} = this.props;
    const tableWidth = this.tableRef.current.offsetWidth;
    this.tableRef.current.scrollTo(calculateNowPosition(currentTime, tableWidth), 0);
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

  renderProgram = (program) => {
    const width = program.duration * MINUTES_TO_TABLE_PX;
    const uniqId = program.id + program.duration + program.start;
    const time = `${moment(program.start).format(TIME_FORMAT)}-${moment(program.end).format(TIME_FORMAT)}`;
    return (
      <Button
        key={uniqId}
        className={cx(styles.program, this.isProgramActive(program) && styles.program__active)}
        style={{minWidth: width, maxWidth: width}}
      >
        <section>{program.title}</section>
        <section className={styles.program__time}>
          {time}
        </section>
      </Button>
    );
  };

  renderChannelWithPrograms = ({id, schedules, images: {logo}}) => (
    <tr
      key={id}
      className={styles.channelWithPrograms__container}
    >
      {
        this.renderChannel({id, logo})
      }
      <td
        colSpan={DAY_TIMES.length}
      >
        <section
          className={styles.programs}
        >
          {
            schedules.map(this.renderProgram)
          }
        </section>
      </td>
    </tr>
  );

  renderTimeStamp = (currentTime, channels) => {
    const {position, bodyHeight} = calculateTimeStampBodyMetrics(currentTime, channels.length);
    return (
      <section
        className={styles.timeStamp}
        style={{left: position}}
      >
        <section
          style={{height: bodyHeight}}
          className={styles.timeStamp__body}/>
      </section>
    );
  };

  render() {
    const {channels, currentTime} = this.props;
    return (
      <section ref={this.tableRef} className={styles.container}>
        <table className={styles.table}>
          <TimeScale currentTime={currentTime} times={DAY_TIMES}/>
          <tbody>
          {
            channels.map(this.renderChannelWithPrograms)
          }
          </tbody>
        </table>
        {
          this.renderTimeStamp(currentTime, channels)
        }
        <NowButton onClick={this.handleNow}/>
      </section>
    );
  }
}