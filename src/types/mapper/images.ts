import { Image, ImageList, ImageTag } from "../domain/images";
import { ImageResponse, ImageResponseList } from "../service/images";

function imageResponseToImage(response: ImageResponse): Image {
  return {
    name: response.name,
    uploader: response.uploader,
    url: response.url,
    tags: response.tags
      .map((tag) => {
        return ImageTag.fromString(tag);
      })
      .filter((tag): tag is ImageTag => Boolean(tag)),
  };
}

export function imageResponseListToImageList(response: ImageResponseList): ImageList {
  return response.map((image) => {
    return imageResponseToImage(image);
  });
}
