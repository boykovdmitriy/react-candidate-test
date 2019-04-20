import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {channelsActions} from '../../redux/channels';
import {Spinner} from '../../components/spinner';
import {Header} from '../../components/header';
import {Button} from '../../components/button';
import {UserIcon, SearchIcon, FavoriteIcon} from '../../components/icons';
import {NowButton} from './nowButton';
import {DaysPanel} from './daysPanel';
import {SideBarItem} from './sideBarItem';
import styles from './channels.css';
import {TimeTable} from './timeTable';

const CURRENT_WEEK = [
  moment().weekday(1),
  moment().weekday(2),
  moment().weekday(3),
  moment().weekday(4),
  moment().weekday(5),
  moment().weekday(6),
  moment().weekday(7),
];

const mapStateToProps = state => ({
  channelsResponse: state.indexChannelsResponse,
});

const mapDispatchToProps = {
  fetchChannels: channelsActions.CHANNELS.request
};

@connect(mapStateToProps, mapDispatchToProps)
export class Channels extends React.PureComponent {
  componentDidMount() {
    const {fetchChannels} = this.props;
    fetchChannels();
  }

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

    if (!isLoaded) return (<Spinner/>);

    return (
      <section>
        {this.renderHeader()}
        <section>
          <section className={styles.channelPanel}>
            <SideBarItem>
              <FavoriteIcon/>
            </SideBarItem>
            <DaysPanel weekdays={CURRENT_WEEK} onDayChanged={this.handleDayChanged}/>
          </section>
          <TimeTable channels={data.channels}/>
        </section>
        <NowButton/>
      </section>
    );
  }
}