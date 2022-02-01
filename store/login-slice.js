//ui-slice

import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { loginIsShown: false },
  reducers: {
    toggle(state) {
      state.loginIsShown = !state.loginIsShown;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice;
