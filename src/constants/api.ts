// src/constants/api.ts

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.example.com';

export const API_ENDPOINTS = {
  IMAGES: '/images',
  USERS: '/users',
  LOGIN: '/login',
  REGISTER: '/register',
  UPLOAD: '/upload',
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const API_HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
};

export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
};