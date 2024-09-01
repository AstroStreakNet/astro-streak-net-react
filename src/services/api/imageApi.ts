// src/services/api/imageApi.ts

import { Image, ImageUploadData } from "../../types/image";
import { apiClient } from "./client";

export const fetchImageList = async (limit?: number): Promise<Image[]> => {
  return apiClient.get<Image[]>(`/images${limit ? `?limit=${limit}` : ""}`);
};

export const fetchImage = async (id: string): Promise<Image> => {
  return apiClient.get<Image>(`/images/${id}`);
};

export const uploadImage = async (data: ImageUploadData): Promise<Image> => {
  return apiClient.post<Image>("/images", data);
};

export const updateImage = async (
  id: string,
  data: Partial<ImageUploadData>
): Promise<Image> => {
  return apiClient.put<Image>(`/images/${id}`, data);
};

export const deleteImage = async (id: string): Promise<void> => {
  return apiClient.delete(`/images/${id}`);
};
