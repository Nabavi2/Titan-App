import { combineReducers, configureStore } from "@reduxjs/toolkit";
import screenSlice from "./screenSlice";

const rootReducer = combineReducers({
  screen: screenSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
