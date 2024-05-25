"use client";
import { addPopularMovies } from "@/lib/features/moviesSlice";
import { API_TMDB, IMG_CDN_URL, TMDB_API_OPTIONS } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const popular = useSelector((store: any) => store.movies.popularMovies);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_TMDB}/popular`, TMDB_API_OPTIONS);
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {popular && popular.length > 0 ? (
          popular.map((movie: any) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={`${IMG_CDN_URL}/${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-gray-600 mb-2">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-gray-600 mb-2">
                  Rating: {movie.vote_average}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">Loading...</p>
        )}
      </div>
    </main>
  );
}
