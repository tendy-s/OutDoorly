import {
  CLEAR_SEARCH,
  SET_SEARCH_ACTIVITIES,
  SET_SEARCH_STATES,
} from "./ParkSearchInfo.types";

const INITIAL_STATE = {
  searchActivities: [],
  searchStates: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_ACTIVITIES:
      return {
        ...state,
        searchActivities: action.payload,
      };

    case SET_SEARCH_STATES:
      return {
        ...state,
        searchStates: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        searchActivities: [],
        searchStates: [],
      };

    default:
      return state;
  }
};

export default reducer;
