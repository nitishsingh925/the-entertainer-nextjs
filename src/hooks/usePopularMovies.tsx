import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "@/lib/features/moviesSlice";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store: any) => store.movies.popularMovies);

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

    if (!popularMovies || !popularMovies.length) {
      fetchData();
    }
  }, [dispatch, popularMovies?.length]);

  return popularMovies;
};

export default usePopularMovies;
