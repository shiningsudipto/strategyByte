"use client";

import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: ReturnType<any>;
}

const Input = ({ label, error, register, ...rest }: InputFieldProps) => {
  return (
    <div className="relative w-[400px] h-[70px] border border-navy-200 bg-navy-100 rounded-[12px] px-4 py-2">
      <label htmlFor={label} className="text-neutral-700 text-sm font-semibold">
        {label}
      </label>
      <input
        id={label}
        {...register}
        {...rest}
        className={`w-full focus-visible:outline-0 text-lg bg-none text-neutral-500 focus:font-semibold focus:text-neutral-700
          ${error ? "border-red-500 focus:ring-red-500" : ""}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
