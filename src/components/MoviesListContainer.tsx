import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";
import usePopularMovies from "@/hooks/usePopularMovies";
import useUpcomingMovies from "@/hooks/useUpcomingMovies";
import { useSelector } from "react-redux";

const MoviesListContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const movies = useSelector((store: any) => store.movies);

  const { fetchPopularMovies = () => {} } = usePopularMovies() || {};
  const { fetchUpcomingMovies = () => {} } = useUpcomingMovies() || {};

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await Promise.all([fetchPopularMovies(), fetchUpcomingMovies()]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [fetchPopularMovies, fetchUpcomingMovies]);

  return (
    <div>
      {isLoading ? (
        <>
          <Shimmer title={"Popular Movies"} />
          <Shimmer title={"Upcoming Movies"} />
        </>
      ) : (
        <>
          <MovieList
            title="Popular Movies"
            routeLink="/popular"
            movies={movies?.popularMovies}
          />
          <MovieList
            title="Upcoming Movies"
            routeLink="/upcoming"
            movies={movies?.upcomingMovies}
          />
        </>
      )}
    </div>
  );
};

export default MoviesListContainer;
