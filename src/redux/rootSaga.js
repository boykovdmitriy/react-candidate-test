import {fork, all} from 'redux-saga/effects';
import {channelsSaga} from './channels';

export default function* rootSaga() {
  yield all([
    fork(channelsSaga),
  ]);
}
