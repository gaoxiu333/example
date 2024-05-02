import { configureStore } from "@reduxjs/toolkit";
import counterReucer from "./conter/conterSlice";

export default configureStore({
  reducer: {
    counter: counterReucer,
  },
});
