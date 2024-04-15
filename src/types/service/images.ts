import {Image} from "../domain/images";

export type ImageResponse = {
  name: string;
  uploader: string;
  url: string;
  tags: string[];
};

export type ImageResponseList = ImageResponse[];