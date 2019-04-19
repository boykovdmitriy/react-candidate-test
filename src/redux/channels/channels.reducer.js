import {channelsActions} from './channels.actions';
import {defReducer} from '../../utils/defReducer';
import {calculateDuration} from '../../utils/timeHelpers';

const compensate = ({channels}) => {
  const result = channels.map(x => ({
    ...x,
    schedules: x.schedules.map(y => ({
      ...y,
      duration: calculateDuration(y.start, y.end),
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

