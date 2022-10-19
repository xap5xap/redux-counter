import { Middleware } from "redux";
import { RootState } from "../app/store";
import { decrement, increment } from "../features/counter/counterSlice";

export const timerMiddleware: Middleware<
  {}, // Most middleware do not modify the dispatch return value
  RootState
> = (storeApi) => {
  const intervalId: NodeJS.Timer = setInterval(() => {
    const counterVal = storeApi.getState().counter.value;
    if (counterVal < 0) {
      return storeApi.dispatch(decrement());
    }
    if (counterVal >= 10) {
      return clearInterval(intervalId);
    }

    storeApi.dispatch(increment());
  }, 1000);

  return (next) => (action) => {
    return next(action);
  };
};
