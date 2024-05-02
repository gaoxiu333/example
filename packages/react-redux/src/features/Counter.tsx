import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/conter/conterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button className="m-1 p-3 " onClick={() => dispatch(increment())}>
          增加
        </button>
        <span>{count}</span>
        <button className="m-1 p-3 " onClick={() => dispatch(decrement())}>
          减少
        </button>
      </div>
    </div>
  );
};
