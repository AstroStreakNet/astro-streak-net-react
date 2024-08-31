// src/types/image.ts

export type ImageTag = 'HAS_SUN' | 'HAS_ASTEROID' | 'HAS_STAR';

export interface Image {
  id: string;
  name: string;
  url: string;
  uploader: string;
  uploadDate: string;
  tags: ImageTag[];
}

export interface ImageUploadData {
  name: string;
  file: File;
  observatory: string;
  rightAscension: number;
  declination: number;
  julianDate: string;
  exposureDuration: number;
  isFits: boolean;
  streakType: {
    cr: boolean;
    rso: boolean;
    neo: boolean;
    da: boolean;
    other: boolean;
  };
  permissions: {
    ml: boolean;
    publish: boolean;
  };
}