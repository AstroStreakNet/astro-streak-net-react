// src/utils/validationUtils.ts

export const isValidEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const isValidPassword = (password: string): boolean => {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

export const isValidUsername = (username: string): boolean => {
  // Alphanumeric, 3-20 characters
  const re = /^[a-zA-Z0-9]{3,20}$/;
  return re.test(username);
};

export const isNotEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};
