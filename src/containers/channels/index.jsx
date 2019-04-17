import React from 'react';
import {connect} from 'react-redux';
import {channelsActions} from '../../redux/channels';

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

  render() {
    console.log(this.props.channelsResponse);
    return (
      <section>

      </section>
    );
  }
}