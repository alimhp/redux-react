import { useSelector, useDispatch } from "react-redux/es/exports";

import { buyIceCream } from "../Redux/IceCream/IceCreamActions";

const HooksCakeContainer = () => {
  //بری اینکه جلوی استیت خالی نباشه دات ایس کریم رو مینوسیم(داخل روت ردیوسر هست)
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>number of iceCream - {numOfIceCream} </div>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
};

export default HooksCakeContainer;
