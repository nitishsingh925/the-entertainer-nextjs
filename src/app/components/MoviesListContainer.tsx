import React from "react";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";

const MoviesListContainer = () => {
  usePopularMovies();
  const movies = useSelector((store: any) => store.movies);

  return (
    <div className="bg-neutral-900">
      <MovieList title="Popular Movies" movies={movies?.popularMovies} />
    </div>
  );
};

export default MoviesListContainer;
