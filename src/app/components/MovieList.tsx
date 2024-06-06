import { addPopularMovies } from "@/lib/features/moviesSlice";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
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
    <>
      <h1 className="text-3xl font-bold mb-6 text-white">Popular Movies</h1>
      <div className=" flex overflow-auto no-scrollbar">
        <div className="flex">
          {popular?.map((movie: any) => (
            <>
              <MovieCard
                key={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                release_date={movie.release_date}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
