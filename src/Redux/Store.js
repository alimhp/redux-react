import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
// import cakeReducer from "./Cake/CakeReducer";
import rootReducer from "./RootReducer";
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
