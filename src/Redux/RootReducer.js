import { combineReducers } from "redux";
import cakeReducer from "./Cake/CakeReducer";
import IceCreamReducer from "./IceCream/IceCreamReducer";
import userReducer from "./users/userReducer";
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
  user: userReducer,
});

export default rootReducer;
