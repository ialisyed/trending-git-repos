import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reposReducer from "../features/repos/reposSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
