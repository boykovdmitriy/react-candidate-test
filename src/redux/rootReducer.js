import {combineReducers} from 'redux';
import {indexChannelsReducer} from './channels';

export default combineReducers({
  indexChannelsResponse: indexChannelsReducer,
});
