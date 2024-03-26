import { AddImagesToPokedex, PokedexResult } from "src/types";
import fetchImageList from "src/api/fetchImageList";
import { useQuery } from "react-query";

const useFetchImageList = () => {
  return useQuery<PokedexResult, Error>("image-list", async () => {
    const result = await fetchImageList();
    return AddImagesToPokedex(result);
  });
};

export default useFetchImageList;
