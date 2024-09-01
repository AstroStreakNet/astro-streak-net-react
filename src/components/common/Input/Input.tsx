// src/components/common/Input/Input.tsx
import React from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password" | "date";
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  name,
  placeholder,
  required = false,
  error,
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default Input;
