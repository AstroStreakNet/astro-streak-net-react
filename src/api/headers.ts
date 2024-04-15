import { challengeApi } from "../config";
import { Header } from "src/types/service/header";

const headers: Header = {
  "x-api-key": challengeApi.apiKey as string,
};

export default headers;
