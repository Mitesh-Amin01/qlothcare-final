import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  label,
  icon: Icon,
  type = "text",
  textarea = false,
  placeholder = "",
  value,
  onChange,
  disabled = false,
  required = false,
  error = "",
  helperText = "",
  rows = 5,
  className = "",
  inputClassName = "",
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  const inputType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : type;

  const commonClasses = `
    w-full
    rounded-xl
    border
    border-clothcare-graySoft/30
    bg-bg-soft/10
    px-4
    ${Icon ? "pl-11" : ""}
    ${isPassword ? "pr-11" : ""}
    text-text-dark
    font-medium
    placeholder:text-text-muted
    transition-all
    duration-300
    outline-none

    focus:bg-bg-white
    focus:border-clothcare-primary
    focus:ring-2
    focus:ring-clothcare-primary/20

    disabled:bg-bg-soft/20
    disabled:text-text-muted
    disabled:cursor-not-allowed

    ${error ? "border-status-danger" : ""}
    ${inputClassName}
  `;

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-2 block text-xs font-bold text-text-muted uppercase tracking-wider">
          {label}
          {required && (
            <span className="ml-1 text-status-danger">*</span>
          )}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <div
            className={`absolute left-4 text-text-muted pointer-events-none z-10 ${
              textarea
                ? "top-4"
                : "top-1/2 -translate-y-1/2"
            }`}
          >
            <Icon size={18} />
          </div>
        )}

        {textarea ? (
          <textarea
            rows={rows}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`${commonClasses} py-3 resize-none`}
            {...props}
          />
        ) : (
          <input
            type={inputType}
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`${commonClasses} h-12`}
            {...props}
          />
        )}

        {isPassword && !textarea && (
          <button
            type="button"
            onClick={() =>
              setShowPassword((prev) => !prev)
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-text-muted
              hover:text-clothcare-primary
              transition-colors
            "
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="mt-2 text-sm text-status-danger">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p className="mt-2 text-xs text-text-muted">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;