"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFindById } from "@/lib/features/moviesSlice";
import { API_TMDB, TMDB_API_OPTIONS } from "@/utils/constants";

const useFindById = (id: number) => {
  const dispatch = useDispatch();
  const findById = useSelector((store: any) => store.movies.findById);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_TMDB}${id}`, TMDB_API_OPTIONS);
        const data = await res.json();
        dispatch(addFindById(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (!findById || !findById.length) {
      fetchData();
    }
  }, [dispatch, findById?.length]);

  return findById;
};

export default useFindById;
