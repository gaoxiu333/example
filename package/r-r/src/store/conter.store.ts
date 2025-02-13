import { createSlice, configureStore } from "@reduxjs/toolkit";

// 原始 redux
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const counterSlice = createSlice({
  name: "counter demo",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const store = configureStore({
  reducer: counterSlice.reducer,
});

// store.subscribe(() => console.log(store.getState()));
// store.dispatch(incremented())
// store.dispatch(incremented())
