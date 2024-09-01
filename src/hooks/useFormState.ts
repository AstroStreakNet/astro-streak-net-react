// src/hooks/useFormState.ts
import { ChangeEvent, useState } from "react";

type FormState<T> = {
  values: T;
  errors: Partial<Record<keyof T, string>>;
};

export const useFormState = <T extends Record<string, any>>(
  initialState: T
) => {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialState,
    errors: {},
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: type === "checkbox" ? checked : value,
      },
    }));
  };

  const setFieldValue = (name: keyof T, value: any) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: value,
      },
    }));
  };

  const setFieldError = (name: keyof T, error: string | null) => {
    setFormState((prev) => ({
      ...prev,
      errors: error
        ? { ...prev.errors, [name]: error }
        : { ...prev.errors, [name]: undefined },
    }));
  };

  return {
    values: formState.values,
    errors: formState.errors,
    handleChange,
    setFieldValue,
    setFieldError,
  };
};

export default useFormState;
