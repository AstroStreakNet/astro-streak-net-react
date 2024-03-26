import { env, requireEnv } from "./env";

const originalEnv = process.env;

describe("get env vars", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("successfully retrieves the env var from process.env", async () => {
    process.env = {
      ...originalEnv,
      REACT_APP_STAGE: "PROD",
    };

    const result = env("REACT_APP_STAGE");

    expect(result).toBe("PROD");
  });

  it("successfully retrieves an empty env var from process.env", async () => {
    process.env = {
      ...originalEnv,
      REACT_APP_STAGE: undefined,
    };

    const result = env("REACT_APP_STAGE");

    expect(result).toBeUndefined();
  });

  it("successfully retrieves the env var when required", async () => {
    process.env = {
      ...originalEnv,
      REACT_APP_STAGE: "PROD",
    };

    const result = requireEnv("REACT_APP_STAGE");

    expect(result).toBe("PROD");
  });

  it("throws an error when trying to require an env var that is undefined", async () => {
    process.env = {
      ...originalEnv,
      REACT_APP_STAGE: undefined,
    };

    expect(() => {
      requireEnv("REACT_APP_STAGE");
    }).toThrowError(new Error(`Missing: process.env['REACT_APP_STAGE'].`));
  });
});
