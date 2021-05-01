import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import FetchListReducer from "./FetchListReducer";
import LoginReqReducer from "./LoginReqReducer";

export default combineReducers({
  FetchListReducer: persistReducer(
    { key: "FetchListReducer", storage, whitelist: ["data"] },
    FetchListReducer
  ),
  LoginReqReducer: persistReducer(
    { key: "LoginReqReducer", storage, whitelist: ["data"] },
    LoginReqReducer
  ),

});
