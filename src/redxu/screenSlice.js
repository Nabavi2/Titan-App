import { createSlice } from "@reduxjs/toolkit";

export const screenSlice = createSlice({
  name: "screen",
  initialState: {
    selectedScreen: "",
  },
  reducers: {
    changeSelectedScreen: (state, action) => {
      //   console.log("dispatched");
      //   console.log(action);
      state.selectedScreen = action.payload;
    },
  },
});

export default screenSlice.reducer;

export const { changeSelectedScreen } = screenSlice.actions;
