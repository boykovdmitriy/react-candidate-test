import {fork, all} from 'redux-saga/effects';
import {issuesSaga} from './issues';

export default function* rootSaga() {
  yield all([
    fork(issuesSaga),
  ]);
}
