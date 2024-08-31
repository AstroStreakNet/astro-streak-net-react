// src/constants/routes.ts

export const ROUTES = {
  HOME: '/',
  GALLERY: '/gallery',
  IMAGE_DETAILS: '/image/:id',
  UPLOAD: '/upload',
  LOGIN: '/login',
  REGISTER: '/register',
  PROFILE: '/profile',
  NOT_FOUND: '*',
};

export const generatePath = (route: string, params: Record<string, string>) => {
  return Object.entries(params).reduce(
    (path, [key, value]) => path.replace(`:${key}`, value),
    route
  );
};