import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { xucXacReducer } from "./reducers/xucxacReducer";

const rootReducer = combineReducers({
  xucXacReducer: xucXacReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootState = ReturnType<typeof store["getState"]>;
export type AppDispatch = typeof store["dispatch"];
