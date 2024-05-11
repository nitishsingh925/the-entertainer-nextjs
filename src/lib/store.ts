import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "./features/moviesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      movies: moviesSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
