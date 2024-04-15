import fetchImageList from "../api/fetchImageList";
import { ImageList } from "../types/domain/images";
import { imageResponseListToImageList } from "../types/mapper/images";
import { useQuery } from "react-query";

const useFetchImageList = () => {
  return useQuery<ImageList, Error>("image-list", async () => {
    const result = await fetchImageList();
    return imageResponseListToImageList(result);
  });
};

export default useFetchImageList;
