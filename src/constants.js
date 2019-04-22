import moment from 'moment/moment';

function generateTimes() {
  const result = [];
  for (let i = 0; i < 24; i++) {
    result.push(i < 10 ? `0${i}:00` : `${i}:00`);
  }
  return result;
}

export const DAY_TIMES = generateTimes();
export const MINUTES_TO_TABLE_PX = 240 / 60;
export const TABLE_ROW_HEIGHT = 66;
export const CHANNEL_ITEM_WIDTH = 64;
export const TIME_STAMP_HEADER_WIDTH = 8;
export const TIME_STAMP_BODY_WIDTH = 2;

export const SERVER_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
export const TIME_FORMAT = 'HH:mm';
export const SHORT_DATE_FORMAT = 'DD.MM';
export const WEEKDAY_FORMAT = 'ddd';


export const CURRENT_WEEKDAYS = [
  moment().weekday(1),
  moment().weekday(2),
  moment().weekday(3),
  moment().weekday(4),
  moment().weekday(5),
  moment().weekday(6),
  moment().weekday(7),
];