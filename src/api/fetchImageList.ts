import { challengeApi } from "../config";
import headers from "src/api/headers";
import { ImageResponseList } from "../types/service/images";

const fetchImageList = async (): Promise<ImageResponseList> => {
  const result = await fetch(`${challengeApi.baseUrl}/images/`, { headers });

  const data = await result.json();
  if (!result.ok) throw Error(data.message);
  return data;
};

export default fetchImageList;
