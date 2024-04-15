export type Image = {
  name: string;
  uploader: string;
  url: string;
  tags: ImageTag[];
};

export type ImageList = Image[];

export enum ImageTag {
  HAS_SUN = "HAS_SUN",
  HAS_ASTEROID = "HAS_ASTEROID",
  HAS_STAR = "HAS_STAR",
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ImageTag {
  export function fromString(tag: string): ImageTag | undefined {
    if (Object.values(ImageTag).includes(tag as ImageTag)) {
      return tag as ImageTag;
    } else {
      return undefined;
    }

  }
}
