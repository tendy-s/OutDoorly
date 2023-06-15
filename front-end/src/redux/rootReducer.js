import { combineReducers } from "redux";

import parkInfoSearchReducer from "./ParkSearchInfo/ParkSearchInfo.slice";

const rootReducer = combineReducers({
  parkSearchInfo: parkInfoSearchReducer,
});

export default rootReducer;
