import {
  configureStore,
  type Action,
  type ThunkAction,
} from "@reduxjs/toolkit";

const counterReducer = {};

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>;
