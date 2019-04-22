import moment from 'moment';
import {SERVER_TIME_FORMAT, WEEKDAY_FORMAT} from '../constants';

export function calculateDuration(startTime, endTime) {
  if (!startTime || !endTime) {
    return 0;
  }
  const start = moment.isMoment(startTime) ? startTime : moment(startTime, SERVER_TIME_FORMAT);
  const end = moment.isMoment(endTime) ? endTime : moment(endTime, SERVER_TIME_FORMAT);
  return end.diff(start, 'minutes');
}

export function getCurrentTimeInMinutes() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}

export function getTimeInMinutes(time) {
  const date = moment(time, SERVER_TIME_FORMAT);
  return date.hours() * 60 + date.minutes();
}

export function getCurrentWeekday() {
  return moment(new Date()).format(WEEKDAY_FORMAT);
}
