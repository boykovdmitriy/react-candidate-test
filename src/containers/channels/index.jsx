import React from 'react';
import {connect} from 'react-redux';
import {channelsActions} from '../../redux/channels';
import {Spinner} from '../../components/spinner';
import {Header} from '../../components/header';
import {Button} from '../../components/button';
import {UserIcon, SearchIcon, FavoriteIcon} from '../../components/icons';
import {WeekdaySelector} from './weekdaySelector';
import {CardItem} from './cardItem';
import styles from './channels.css';
import {ProgramTable} from './programTable';
import {getCurrentTimeInMinutes, getCurrentWeekday} from '../../utils/timeHelpers';
import {CURRENT_WEEKDAYS} from '../../constants';

const mapStateToProps = state => ({
  channelsResponse: state.indexChannelsResponse,
});

const mapDispatchToProps = {
  fetchChannels: channelsActions.CHANNELS.request
};

@connect(mapStateToProps, mapDispatchToProps)
export class Channels extends React.PureComponent {
  state = {
    currentTime: getCurrentTimeInMinutes(),
    selectedWeekday: getCurrentWeekday(),
  };

  componentDidMount() {
    const {fetchChannels} = this.props;
    fetchChannels();
    this.startTimeWatching();
  }

  componentWillUnmount() {
    this.clearTimeWatching();
  }

  startTimeWatching() {
    this.timerId = setInterval(this.handleTimeUpdated, 60 * 1000);
  };

  clearTimeWatching() {
    clearInterval(this.timerId);
  }

  handleTimeUpdated = () => {
    this.setState({currentTime: getCurrentTimeInMinutes()});
  };

  handleDayChanged = () => {

  };

  renderHeader() {
    return (
      <Header>
        <Button className={styles.headerButton}>
          <UserIcon/>
        </Button>
        <Button className={styles.headerButton}>
          <SearchIcon/>
        </Button>
      </Header>
    );
  }

  render() {
    const {channelsResponse: {isLoaded, data}} = this.props;
    const {currentTime, selectedWeekday} = this.state;

    if (!isLoaded) return (<Spinner/>);

    return (
      <section>
        {this.renderHeader()}
        <section>
          <section className={styles.channelPanel}>
            <CardItem>
              <FavoriteIcon/>
            </CardItem>
            <WeekdaySelector
              selectedWeekday={selectedWeekday}
              weekdays={CURRENT_WEEKDAYS}
              onDayChanged={this.handleDayChanged}
            />
          </section>
          <ProgramTable currentTime={currentTime} channels={data.channels}/>
        </section>
      </section>
    );
  }
}