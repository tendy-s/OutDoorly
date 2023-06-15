import { combineReducers } from "redux";

import parkSearchInfoReducer from "./ParkSearchInfo/ParkSearchInfo.slice";

const rootReducer = combineReducers({
  parkSearchInfo: parkSearchInfoReducer,
});

export default rootReducer;
