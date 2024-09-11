"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  API_TMDB,
  TMDB_API_OPTIONS,
  IMG_CDN_URL,
  IMG_CDN_URL_LARGE,
} from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

const fetchMovieById = async (id: number) => {
  console.log("Fetching movie with ID:", id);
  const response = await fetch(`${API_TMDB}/${id}`, TMDB_API_OPTIONS);
  if (!response.ok) throw new Error("Failed to fetch movie data");

  const data = await response.json();
  console.log("Fetched movie data:", data);

  return data;
};

interface PageProps {
  params: {
    id: number;
  };
}

const Page: React.FC<PageProps> = ({ params: { id } }) => {
  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => fetchMovieById(id),
    enabled: !!id, // Ensure the query is only run if the id is truthy
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error fetching movie details</p>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Movie not found</p>
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
          <Link href="/" prefetch className="text-white">
            Go Back
          </Link>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <Image
            src={`${IMG_CDN_URL}${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-w-xs mb-4 rounded-lg shadow-lg"
            width={500}
            height={500}
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
