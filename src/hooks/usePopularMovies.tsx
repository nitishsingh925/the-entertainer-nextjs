import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "@/lib/features/moviesSlice";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const usePopularMovies = (pageNo: number = 1) => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store: any) => store.movies.popularMovies);

  useEffect(() => {
    const fetchData = async (pageNo: number) => {
      try {
        const res = await fetch(
          `${API_TMDB}/popular?language=en-US&page=${pageNo}`,
          TMDB_API_OPTIONS
        );
        const data = await res.json();
        dispatch(addPopularMovies(data.results));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(pageNo);
  }, [dispatch, popularMovies?.length]);

  return popularMovies;
};

export default usePopularMovies;
