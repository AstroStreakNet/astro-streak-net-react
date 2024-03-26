/**
 * Stage specific environment variables likely to change across stages
 */
export type StageVars = {
  REACT_APP_CHALLENGE_API_KEY: string;
  REACT_APP_CHALLENGE_BASE_URL: string;
};

/**
 * Common environment variables that are consistent across all stages
 */
export interface EnvVars extends StageVars {
  REACT_APP_STAGE: string;
  REACT_APP_VERSION: string;
}

type ValidVarName = keyof EnvVars;

/**
 * Returns value stored in environment variable with the given `name`.
 * @param name - name of variable to fetch from this process's environment.
 */
export const env = (name: ValidVarName): string | undefined =>
  process.env[name];

/**
 * Returns value stored in environment variable with the given `name`.
 * Throws Error if no such variable or if variable undefined; thus ensuring type-safety.
 * @param name - name of variable to fetch from this process's environment.
 */
export const requireEnv = (name: ValidVarName): string => {
  const value = env(name);
  if (!value) {
    throw new Error(`Missing: process.env['${name}'].`);
  }
  return value;
};
