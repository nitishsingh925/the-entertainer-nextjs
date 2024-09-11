import { useQuery } from "@tanstack/react-query";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const fetchPopularMovies = async (pageNo: number) => {
  const response = await fetch(
    `${API_TMDB}/popular?language=en-US&page=${pageNo}`,
    TMDB_API_OPTIONS
  );
  if (!response.ok) throw new Error("Failed to fetch popular movies");

  const data = await response.json();
  return data;
};

const usePopularMovies = (pageNo: number = 1) => {
  return useQuery({
    queryKey: ["popular", pageNo],
    queryFn: () => fetchPopularMovies(pageNo),
  });
};

export default usePopularMovies;
