import { useQuery } from "@tanstack/react-query";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const fetchUpcomingMovies = async (pageNo: number = 1) => {
  const response = await fetch(
    `${API_TMDB}/upcoming?language=en-US&page=${pageNo}`,
    TMDB_API_OPTIONS
  );
  if (!response.ok) throw new Error("Failed to fetch upcoming movies");
  return await response.json(); // Return full data
};

const useUpcomingMovies = (pageNo: number = 1) => {
  return useQuery({
    queryKey: ["upcoming", pageNo],
    queryFn: () => fetchUpcomingMovies(pageNo),
  });
};

export default useUpcomingMovies;
