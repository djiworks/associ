import { ASSOCIATION_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
  isLoading: true,
  associations: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ASSOCIATION_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        associations: action.payload,
      };

    default:
      return state;
  }
};
