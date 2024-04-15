import { challengeApi } from "../../config";
import images from "src/__test__/mocks/image-lists/images.json";
import { rest } from "msw";

export const Any500Factory = () => {
  return rest.get(`${challengeApi.baseUrl}/*`, (req, res, ctx) => {
    return res.once(ctx.status(500), ctx.json({ message: "Fail" }));
  });
};

export const imageListSuccess = rest.get(
  `${challengeApi.baseUrl}/images/`,
  (req, res, ctx) => {
    return res(ctx.json(images));
  }
);

type Options = {
  once?: boolean;
};

/*
 * Factory to return handlers that return a 500 response for the image info
 * endpoint.
 *  once: used to run the handler only once for simulating single failures.
 */
export const imageList500Factory = ({ once }: Options = {}) => {
  return rest.get(`${challengeApi.baseUrl}/images/`, (req, res, ctx) => {
    if (once) {
      return res.once(ctx.status(500), ctx.json({ message: "Fail" }));
    } else {
      return res(ctx.status(500), ctx.json({ message: "Fail" }));
    }
  });
};

export const scenarios = {
  success: [imageListSuccess],
  fail: [imageList500Factory()],
  failOnce: [imageListSuccess],
};

export type Scenario = keyof typeof scenarios;
