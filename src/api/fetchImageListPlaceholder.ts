import { challengeApi } from "../config";
import headers from "src/api/headers";
import { PokedexResult } from "src/types/placeholder";

const fetchImageListPlaceholder = async (): Promise<PokedexResult> => {
  const result = await fetch(`${challengeApi.baseUrl}/pokedex/1`, { headers });

  const data = await result.json();
  if (!result.ok) throw Error(data.message);
  return data;
};

export default fetchImageListPlaceholder;
