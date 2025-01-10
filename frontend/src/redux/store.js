import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./Slice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie: movieReducer,
  },
});
export default store;
