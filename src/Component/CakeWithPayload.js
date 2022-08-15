import { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { buyCake } from "../Redux/Cake/CakeAction";
const CakeWithPayload = (props) => {
  const [Numbers, setNumbers] = useState(0);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div>number of cake - {numOfCakes} </div>
      <input type="text" onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(Numbers))}>
        buy {Numbers}cake
      </button>
    </div>
  );
};

export default CakeWithPayload;
