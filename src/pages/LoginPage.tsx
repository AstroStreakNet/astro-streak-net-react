// src/pages/LoginPage.tsx
import React, { useState } from "react";

import Button from "../components/common/Button/Button";
import ErrorMessage from "../components/common/ErrorMessage/ErrorMessage";
import Input from "../components/common/Input/Input";

import { isValidEmail } from "../utils/validationUtils";

import { ROUTES } from "../constants";
import { useAuth } from "../context";
import { useFormState } from "../hooks";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { values, handleChange, errors, setFieldError } =
    useFormState<LoginForm>({
      email: "",
      password: "",
    });

  const validateForm = (): boolean => {
    let isValid = true;
    if (!values.email) {
      setFieldError("email", "Email is required");
      isValid = false;
    } else if (!isValidEmail(values.email)) {
      setFieldError("email", "Invalid email format");
      isValid = false;
    }
    if (!values.password) {
      setFieldError("password", "Password is required");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await login(values.email, values.password);
      navigate(ROUTES.HOME);
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <Input
          type="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
        {error && <ErrorMessage message={error} />}
        <Button type="submit" variant="primary" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
