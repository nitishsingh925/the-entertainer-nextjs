import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "@/lib/features/moviesSlice";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(
    (store: any) => store.movies.upcomingMovies
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_TMDB}/upcoming`, TMDB_API_OPTIONS);
        const data = await res.json();
        dispatch(addUpcomingMovies(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!upcomingMovies || !upcomingMovies.length) {
      fetchData();
    }
  }, [dispatch, upcomingMovies?.length]);

  return upcomingMovies;
};

export default useUpcomingMovies;
