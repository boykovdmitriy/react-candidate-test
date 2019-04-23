import uuid from 'uuid/v1';
import {channelsActions} from './channels.actions';
import {defReducer} from '../../utils/defReducer';
import {calculateDuration, getTimeInMinutes} from '../../utils/timeHelpers';

const compensate = ({channels}) => {
  const result = channels.map(x => ({
    ...x,
    schedules: x.schedules.map(y => ({
      ...y,
      duration: calculateDuration(y.start, y.end),
      startInMinutes: getTimeInMinutes(y.start),
      endInMinutes: getTimeInMinutes(y.end),
      uniqId: uuid()
    }))
  }));
  return {
    channels: result,
  };
};

export const indexChannelsReducer = defReducer(
  channelsActions.CHANNELS,
  {compensate}
);

