// src/services/api/userApi.ts

import { LoginCredentials, RegistrationData, User } from "../../types/user";
import { apiClient } from "./client";

export const login = async (credentials: LoginCredentials): Promise<User> => {
  return apiClient.post<User>("/login", credentials);
};

export const register = async (data: RegistrationData): Promise<User> => {
  return apiClient.post<User>("/register", data);
};

export const fetchUserProfile = async (): Promise<User> => {
  return apiClient.get<User>("/profile");
};

export const updateUserProfile = async (data: Partial<User>): Promise<User> => {
  return apiClient.put<User>("/profile", data);
};
