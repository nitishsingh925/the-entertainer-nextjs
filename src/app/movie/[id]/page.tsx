"use client";
import React from "react";
import useFindById from "@/app/hooks/useFindById";
import { useSelector } from "react-redux";
import { IMG_CDN_URL, IMG_CDN_URL_LARGE } from "@/utils/constants";

interface PageProps {
  params: {
    id: number;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const movie = useSelector((store: any) => store.movies?.findById);
  useFindById(params.id);

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${IMG_CDN_URL_LARGE}${movie.backdrop_path})`,
      }}
    >
      <div className="bg-black bg-opacity-70 min-h-screen flex justify-center items-center">
        <div className="max-w-4xl mx-auto p-4 text-white">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <img
            src={`${IMG_CDN_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-w-xs mb-4 rounded-lg shadow-lg"
          />
          <p className="italic text-gray-300 mb-4">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>
          <div className="mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </div>
          <div className="mb-2">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre: any) => genre.name).join(", ")}
          </div>
          <div className="mb-2">
            <strong>Runtime:</strong> {movie.runtime} minutes
          </div>
          <div className="mb-2">
            <strong>Vote Average:</strong> {movie.vote_average}
          </div>
          <div className="mb-4">
            <strong>Vote Count:</strong> {movie.vote_count}
          </div>
          <a
            href={movie.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline"
            aria-label={`Visit the official website for ${movie.title}`}
          >
            Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
