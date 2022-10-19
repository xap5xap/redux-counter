import { useAppDispatch, useAppSelector } from "../app/hooks";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  return (
    <div className="App-counter">
      <button onClick={() => dispatch(decrement())}>-</button>
      <div data-testid="counter-val">{counter}</div>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default Counter;
