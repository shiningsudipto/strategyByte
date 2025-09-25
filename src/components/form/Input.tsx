"use client";

import { InputHTMLAttributes, useState, useRef, useEffect } from "react";
import { FieldError } from "react-hook-form";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: ReturnType<any>;
}

const Input = ({ label, error, register, ...rest }: InputFieldProps) => {
  const [isClicked, setClicked] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={wrapperRef}
      onClick={() => setClicked(true)}
      className={`relative lg:w-[400px] w-full h-[70px] rounded-[12px] px-4 py-2 
        bg-navy-100 transition-colors cursor-text
        ${
          error
            ? "border border-red-500"
            : isClicked
            ? "border border-navy-200"
            : "border border-transparent"
        }`}
    >
      <label htmlFor={label} className="text-neutral-700 text-sm font-semibold">
        {label}
      </label>
      <input
        id={label}
        {...register}
        {...rest}
        className="w-full focus-visible:outline-0 text-lg bg-none
          placeholder:text-neutral-500 text-neutral-500 focus:font-semibold focus:text-neutral-700"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default Input;
