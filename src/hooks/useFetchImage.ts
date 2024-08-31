// src/hooks/useFetchImage.ts
import { useQuery, UseQueryResult } from 'react-query';
import { fetchImage } from '../services/api/imageApi';
import { Image } from '../types';

export const useFetchImage = (imageId: string | undefined): UseQueryResult<Image, Error> => {
  return useQuery<Image, Error>(
    ['image', imageId],
    () => fetchImage(imageId!),
    {
      enabled: !!imageId,
    }
  );
};

export default useFetchImage;