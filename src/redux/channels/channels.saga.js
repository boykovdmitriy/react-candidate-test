import {all} from 'redux-saga/effects';
import {channelsActions} from './channels.actions';
import {defRequestSaga} from '../../utils/defSaga';

export const urls = {
  indexChannels: () => `api/epg`,
};

export function* channelsSaga() {
  yield all([
    defRequestSaga(channelsActions.CHANNELS, urls.indexChannels, {method: 'GET'}),
  ]);
}
