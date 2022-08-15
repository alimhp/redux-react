import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// import cakeReducer from "./Cake/CakeReducer";
import rootReducer from "./RootReducer";
const store = createStore(rootReducer,applyMiddleware (logger));
export default store;
