import { useSelector, useDispatch } from "react-redux/es/exports";

import { buyIceCream } from "../Redux/IceCream/IceCreamActions";

const HooksCakeContainer = () => {
  //بری اینکه جلوی استیت خالی نباشه دات ایس کریم رو مینوسیم(داخل روت ردیوسر هست)
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <div>number of cake - {numOfIceCream} </div>
      <button onClick={() => dispatch(buyIceCream())}>buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
