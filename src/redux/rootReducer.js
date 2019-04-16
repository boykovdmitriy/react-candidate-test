import {combineReducers} from 'redux';
import {indexRepositoryIssuesReducer, indexAssignedPersonsReducer} from './issues';

export default combineReducers({
  indexAssignedPersons: indexAssignedPersonsReducer,
  indexRepositoryIssues: indexRepositoryIssuesReducer,
});
