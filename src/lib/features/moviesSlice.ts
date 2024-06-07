import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MoviesState {
  popularMovies: null | any[];
  upcomingMovies: null | any[];
  findById: null | any[];
}

const initialState: MoviesState = {
  popularMovies: null,
  upcomingMovies: null,
  findById: null,
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
    addFindById: (state, action: PayloadAction<any>) => {
      state.findById = action.payload;
    },
  },
});

export const { addPopularMovies, addUpcomingMovies, addFindById } =
  moviesSlice.actions;

export default moviesSlice.reducer;
