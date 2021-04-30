import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.min.js.map";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Note: this API requires redux@>=3.1.0
export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
export const persistor = persistStore(store);
