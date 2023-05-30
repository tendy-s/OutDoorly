import {
  CLEAR_SEARCH,
  SET_SEARCH_ACTIVITIES,
  SET_SEARCH_STATES,
} from "./ParkSearchInfo.types";

export const setSearchActivities = (payload) => {
  return {
    type: SET_SEARCH_ACTIVITIES,
    payload,
  };
};

export const setSearchStates = (payload) => {
  return {
    type: SET_SEARCH_STATES,
    payload,
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};
