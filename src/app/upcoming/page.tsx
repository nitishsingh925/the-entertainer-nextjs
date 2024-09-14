"use client";
import React from "react";
import useUpcomingMovies from "@/hooks/useUpcomingMovies"; // Import the hook for upcoming movies
import MovieCard from "@/components/MovieCard";
import { useSelector } from "react-redux";
import Link from "next/link";

const UpcomingMoviesPage = () => {
  useUpcomingMovies(1); // Fetch upcoming movies with page number 1
  const { upcomingMovies } = useSelector((store: any) => store.movies);
  return (
    <div className="px-6 py-4">
      <Link href={"/"} prefetch>
        Go Back
      </Link>
      <h1 className="text-2xl md:text-4xl py-4 text-center ">
        Upcoming Movies
      </h1>
      <div className="flex flex-wrap justify-center">
        {upcomingMovies?.map((movie: any) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMoviesPage;
