import "./App.css";
// import CakeContainer from "./Component/CakeContainer";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCreamContainer from "./Component/HookIceCreamContainer";
import CakeWithPayload from "./Component/CakeWithPayload";
import UserContainer from "./Component/userContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <IceCreamContainer />
        <HooksCakeContainer />
        <CakeWithPayload /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
