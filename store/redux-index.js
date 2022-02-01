import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./login-slice";
import planSlice from "./plan-slice";

const store = configureStore({
  //setup the root reducer
  reducer: { login: loginSlice.reducer, plan: planSlice.reducer },
});

export default store;
