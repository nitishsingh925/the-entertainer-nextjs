"use client";
import React from "react";
import usePopularMovies from "@/hooks/usePopularMovies";
import MovieCard from "@/components/MovieCard";
import { useSelector } from "react-redux";
import Link from "next/link";

const PopularMoviesPage = () => {
  usePopularMovies(1);
  const { popularMovies } = useSelector((store: any) => store.movies);
  return (
    <div className="px-6 py-4 bg-neutral-800">
      <Link href={"/"} className="text-white">
        Go Back
      </Link>
      <h1 className="text-2xl md:text-4xl py-4 text-center text-white">
        Popular Movies
      </h1>
      <div className="flex flex-wrap justify-center">
        {popularMovies?.map((movie: any) => (
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

export default PopularMoviesPage;
