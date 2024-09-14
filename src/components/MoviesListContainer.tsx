import React from "react";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";
import usePopularMovies from "@/hooks/usePopularMovies";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";

const MoviesListContainer = () => {
  const {
    data: popularMoviesData,
    isLoading: isLoadingPopular,
    error: errorPopular,
  } = usePopularMovies();
  const {
    data: upcomingMoviesData,
    isLoading: isLoadingUpcoming,
    error: errorUpcoming,
  } = useUpcomingMovies();

  if (isLoadingPopular || isLoadingUpcoming) {
    return (
      <div className="">
        <Shimmer title="Popular Movies" />
        <Shimmer title="Upcoming Movies" />
      </div>
    );
  }

  if (errorPopular || errorUpcoming) {
    return (
      <div className="">
        <p className="">Error fetching movies. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="">
      <MovieList
        title="Popular Movies"
        routeLink="/popular"
        movies={popularMoviesData?.results || []} // Assuming `results` is the key for movies
      />
      <MovieList
        title="Upcoming Movies"
        routeLink="/upcoming"
        movies={upcomingMoviesData?.results || []} // Assuming `results` is the key for movies
      />
    </div>
  );
};

export default MoviesListContainer;
