// src/hooks/useFetchImageList.ts
import { useQuery, UseQueryResult } from "react-query";
import { fetchImageList } from "../services/api/imageApi";
import { Image } from "../types/image";

export const useFetchImageList = (
  limit?: number
): UseQueryResult<Image[], Error> => {
  return useQuery<Image[], Error>(
    ["imageList", limit],
    () => fetchImageList(limit),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 30 * 60 * 1000, // 30 minutes
    }
  );
};

export default useFetchImageList;
