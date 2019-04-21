import moment from 'moment';

export const SERVER_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export function calculateDuration(startTime, endTime) {
  if (!startTime || !endTime) {
    return 0;
  }
  const start = moment.isMoment(startTime) ? startTime : moment(startTime, SERVER_TIME_FORMAT);
  const end = moment.isMoment(endTime) ? endTime : moment(endTime, SERVER_TIME_FORMAT);
  return end.diff(start, 'minutes');
}

export function getCurrentTime() {
  const date = new Date();
  return date.getHours() * 60 + date.getMinutes();
}