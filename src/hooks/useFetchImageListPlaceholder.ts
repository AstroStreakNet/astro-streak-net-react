import { AddImagesToPokedex, PokedexResult } from "src/types/placeholder";
import fetchImageListPlaceholder from "src/api/fetchImageListPlaceholder";
import { useQuery } from "react-query";

const useFetchImageListPlaceholder = () => {
  return useQuery<PokedexResult, Error>("image-list", async () => {
    const result = await fetchImageListPlaceholder();
    return AddImagesToPokedex(result);
  });
};

export default useFetchImageListPlaceholder;
