import { BUY_CAKE } from "./CakeTypes";

export function buyCake(Numbers = 1) {
  return {
    type: BUY_CAKE,
    payload: Numbers,
  };
}
