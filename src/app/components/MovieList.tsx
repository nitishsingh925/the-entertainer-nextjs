import React from "react";
import MovieCard from "./MovieCard";

interface IMovie {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface IMovieListProps {
  title: string;
  movies: IMovie[];
}

const MovieList: React.FC<IMovieListProps> = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        <div className="flex">
          {movies?.map((movie: any) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              title={movie.title}
              release_date={movie.release_date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
