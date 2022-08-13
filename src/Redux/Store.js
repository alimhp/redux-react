import { createStore } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import rootReducer from "./RootReducer";
const store = createStore(rootReducer);
export default store;
