import { combineReducers } from "redux";

import parkSearchInfoReducer from "./ParkSearchInfo/ParkSearchInfo.slice";
import parkDetailsReducer from "./ParkDetails/ParkDetails.slice";

const rootReducer = combineReducers({
  parkSearchInfo: parkSearchInfoReducer,
  parkDetails: parkDetailsReducer,
});

export default rootReducer;
