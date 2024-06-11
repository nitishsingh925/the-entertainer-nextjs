import React from "react";
import MovieList from "./MovieList";
import usePopularMovies from "@/hooks/usePopularMovies";
import { useSelector } from "react-redux";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";

const MoviesListContainer = () => {
  usePopularMovies();
  useUpcomingMovies();
  const movies = useSelector((store: any) => store.movies);

  return (
    <div>
      {/* for Popular Movies List */}
      <MovieList
        title="Popular Movies"
        routeLink="popular"
        movies={movies?.popularMovies}
      />
      {/* for Upcoming Movies List */}
      <MovieList
        title="Upcoming Movies"
        routeLink="upcoming"
        movies={movies?.upcomingMovies}
      />
    </div>
  );
};

export default MoviesListContainer;
