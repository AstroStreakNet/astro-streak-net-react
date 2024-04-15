import { AddImagesToPokedex, PokedexResult } from "src/types/placeholder";
import fetchImageListPlaceholder from "src/api/fetchImageListPlaceholder";
import { useQuery } from "react-query";

const useFetchImageList = () => {
  return useQuery<PokedexResult, Error>("image-list", async () => {
    const result = await fetchImageListPlaceholder();
    return AddImagesToPokedex(result);
  });
};

export default useFetchImageList;
