import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface MoviesState {
  popularMovies: null | any[];
  upcomingMovies: null | any[];
}

const initialState: MoviesState = {
  popularMovies: null,
  upcomingMovies: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addPopularMovies: (state, action: PayloadAction<any[]>) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action: PayloadAction<any[]>) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export const { addPopularMovies, addUpcomingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
