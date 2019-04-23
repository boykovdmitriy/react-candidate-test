import {get} from 'lodash';

const initialState = {
  error: '',
  isError: false,
  isLoading: false,
  isLoaded: false,
  data: {},
};

const doNothing = (data) => data;

export function defReducer(actions, config) {
  return (state = initialState, action) => {
    switch (action.type) {
      case actions.REQUEST:
        return {
          ...state,
          data: {},
          isError: false,
          isLoading: true,
          isLoaded: false,
        };
      case actions.SUCCESS:
        const compensate = get(config, 'compensate', doNothing);
        const data = compensate(action.payload.data);
        return {
          ...state,
          data: data,
          isError: false,
          isLoading: false,
          isLoaded: true,
        };
      case actions.FAILURE:
        return {
          ...state,
          isError: true,
          error: action.payload,
          isLoading: false,
          isLoaded: false,
        };
      default:
        return state;
    }
  }
}
