"use client";
import { ReactNode, ElementType } from "react";

type TProps = {
  label: string;
  className?: string;
  // Either a component (LucideIcon, react-icons, etc.) or an already-rendered element
  icon?: ElementType | ReactNode;
  size?: number;
  variant?: "primary" | "bordered";
};

const CustomButton = ({
  label,
  icon: Icon,
  size = 16,
  variant = "primary",
  className,
}: TProps) => {
  const baseClasses =
    "font-bold cursor-pointer py-5 px-6 rounded-full flex items-center gap-2 transition duration-300";
  const variants = {
    primary:
      "bg-yellow-200 text-neutral-700 hover:bg-neutral-700 hover:text-yellow-200",
    bordered:
      "border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-yellow-200",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} group ${
        className && className
      }`}
    >
      <span className="group-hover:underline">{label}</span>

      <span className="bg-neutral-700 group-hover:bg-yellow-200 text-white group-hover:text-neutral-700 rounded-full p-1 flex items-center justify-center transition duration-300">
        {/* Case 1: If it's a component type (like LucideIcon or react-icons component) */}
        {typeof Icon === "function" ? <Icon size={size} /> : Icon}
      </span>
    </button>
  );
};

export default CustomButton;
