import {
  suppressErrors,
  unSuppressErrors,
} from "src/__test__/utils/suppress-unsuppress-errors";
import fetchImageListPlaceholder from "src/api/fetchImageListPlaceholder";
import { imageList500Factory } from "src/__test__/mocks/handlers";
import images from "src/__test__/mocks/image-lists/imagesPlaceholder.json";
import { server } from "src/__test__/mocks/server";

describe("fetchImageList", () => {
  it("should successfully fetch a list of images", async () => {
    const result = await fetchImageListPlaceholder();
    expect(result).toEqual(images);
  });
});

describe("fetchImageListPlaceholder Errors", () => {
  beforeEach(suppressErrors);
  afterEach(unSuppressErrors);
  it("should fail and throw an error message", async () => {
    server.use(imageList500Factory({ once: true }));
    await expect(fetchImageListPlaceholder()).rejects.toThrowError("Fail");
  });
});
