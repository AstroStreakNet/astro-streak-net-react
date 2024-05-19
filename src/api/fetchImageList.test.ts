import {
  suppressErrors,
  unSuppressErrors,
} from "src/__test__/utils/suppress-unsuppress-errors";
import fetchImageList from "./fetchImageList";
import { imageList500Factory } from "src/__test__/mocks/handlers";
import images from "src/__test__/mocks/image-lists/images.json";
import { server } from "src/__test__/mocks/server";

describe("fetchImageList", () => {
  it("should successfully fetch a list of images", async () => {
    const result = await fetchImageList();
    expect(result).toEqual(images);
  });
});

describe("fetchImageList Errors", () => {
  beforeEach(suppressErrors);
  afterEach(unSuppressErrors);
  it("should fail and throw an error message", async () => {
    server.use(imageList500Factory({ once: true }));
    await expect(fetchImageList()).rejects.toThrowError("Fail");
  });
});
