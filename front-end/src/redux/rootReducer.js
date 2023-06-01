import { combineReducers } from "redux";

import parkInfoSearchReducer from "./ParkSearchInfo/ParkSearchInfo.reducer";

const rootReducer = combineReducers({
  parkSearchInfo: parkInfoSearchReducer,
});

export default rootReducer;
