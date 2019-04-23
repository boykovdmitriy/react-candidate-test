import {
  CHANNEL_ITEM_WIDTH,
  MINUTES_TO_TABLE_PX, TABLE_ROW_HEIGHT,
  TIME_STAMP_BODY_WIDTH,
  TIME_STAMP_HEADER_WIDTH
} from '../../../constants';

const TIME_STAMP_OFFSET = CHANNEL_ITEM_WIDTH + (TIME_STAMP_HEADER_WIDTH - TIME_STAMP_BODY_WIDTH) / 2;

export function calculateTimeStampBodyMetrics(currentTime, channelsCount) {
  return {
    position: currentTime * MINUTES_TO_TABLE_PX + TIME_STAMP_OFFSET,
    bodyHeight: TABLE_ROW_HEIGHT * channelsCount
  }
}

export function calculateNowPosition(currentTime, tableWidth) {
  return currentTime * MINUTES_TO_TABLE_PX + CHANNEL_ITEM_WIDTH - tableWidth/2;
}

export function calculateTimeStampHeaderMetrics(currentTime) {
  const minutes = currentTime % 60;
  const centeringOffset = (TIME_STAMP_HEADER_WIDTH - TIME_STAMP_BODY_WIDTH) / 2;
  return {
    headerPosition: MINUTES_TO_TABLE_PX * minutes,
    bodyPiecePosition: MINUTES_TO_TABLE_PX * minutes + centeringOffset,
  }
}
