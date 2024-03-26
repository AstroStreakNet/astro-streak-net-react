import { requireEnv } from "./env";

export const app = {
  name: "SpaceTitle",
  stage: requireEnv("REACT_APP_STAGE"),
  version: requireEnv("REACT_APP_VERSION"),
};

export const challengeApi = {
  apiKey: requireEnv("REACT_APP_CHALLENGE_API_KEY"),
  baseUrl: requireEnv("REACT_APP_CHALLENGE_BASE_URL"),
};
