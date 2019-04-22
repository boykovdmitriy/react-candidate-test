import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import {NowButton} from '../nowButton';
import {TimeScale} from '../timeScale';
import {Button} from '../../../components/button';
import styles from './programTable.css';
import {
  CHANNEL_ITEM_WIDTH,
  DAY_TIMES,
  MINUTES_TO_TABLE_PX,
  TABLE_ROW_HEIGHT, TIME_FORMAT, TIME_STAMP_BODY_WIDTH,
  TIME_STAMP_HEADER_WIDTH
} from '../../../constants';

const TIME_STAMP_OFFSET = CHANNEL_ITEM_WIDTH + (TIME_STAMP_HEADER_WIDTH - TIME_STAMP_BODY_WIDTH) / 2;

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
    const centerOfTable = this.tableRef.current.offsetWidth / 2;
    this.tableRef.current.scrollTo(currentTime * MINUTES_TO_TABLE_PX + CHANNEL_ITEM_WIDTH - centerOfTable, 0);
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

  renderTimeStamp = (currentTime, channels) => (
    <section
      className={styles.timeStamp}
      style={{left: currentTime * MINUTES_TO_TABLE_PX + TIME_STAMP_OFFSET}}
    >
      <section
        style={{height: TABLE_ROW_HEIGHT * channels.length}}
        className={styles.timeStamp__body}/>
    </section>
  );

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