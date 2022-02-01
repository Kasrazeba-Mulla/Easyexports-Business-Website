import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan",
  initialState: { planIsShown: false },
  reducers: {
    showPlan(state) {
      state.planIsShown = !state.planIsShown;
    },
  },
});

export const planActions = planSlice.actions;

export default planSlice;
