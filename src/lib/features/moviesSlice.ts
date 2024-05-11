import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";

export interface MoviesState {
  popularMovies: null | any[];
}

const initialState: MoviesState = {
  popularMovies: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addPopularMovies: (state, action: PayloadAction<any[]>) => {
      state.popularMovies = action.payload;
    },
  },
});

export const { addPopularMovies } = moviesSlice.actions;

export const selectPopularMovies = (state: RootState) =>
  state.movies.popularMovies;

export default moviesSlice.reducer;
