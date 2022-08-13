import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../Redux/Cake/CakeAction";
const HooksCakeContainer = (props) => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>number of cake - {numOfCakes} </div>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
