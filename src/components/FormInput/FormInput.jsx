import React from "react";

const FormInput = ({
  label,
  type,
  id,
  value,
  onChange,
  placeholder,
  className,
  errorMessage,
}) => {
  return (
    <div className="m-0 text-left">
      <label
        htmlFor={id}
        className="text-gray-700 sm:flex-1 text-sm font-medium"
      >
        {label}
        <input
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full outline-1 outline-blue-200 mt-1 border border-gray-300 py-2 px-3 rounded-lg ${className}`}
        />
      </label>
      {value.length === 0 && (
        <span className="text-red-600 text-sm mt-1">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormInput;
