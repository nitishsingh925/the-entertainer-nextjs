// TMDB
export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_READ_ACCESS_TOKEN}`,
  },
};
export const API_TMDB = "https://api.themoviedb.org/3/movie/";
export const API_TMDB_SEARCH =
  "https://api.themoviedb.org/3/search/movie?query=";
export const API_EMBED_YOUTUBE = "https://www.youtube.com/embed/";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
