import { immer } from "zustand/middleware/immer";
import { create } from "zustand";
type State = {
  count: number;
};
type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};
const useCountStore = create<State & Actions>()(
  immer((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count += qty;
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count -= qty;
      }),
  }))
);

export const ExampleImmer = () => {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);

  return (
    <div className="App">
      {count} <hr />
      <button type="button" onClick={() => increment(1)}>
        Increment
      </button>{" "}
      <button type="button" onClick={() => decrement(1)}>
        Decrement
      </button>
    </div>
  );
};
