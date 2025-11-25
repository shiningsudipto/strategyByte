"use client";
import { ReactNode, ElementType } from "react";
import Link from "next/link";

type TProps = {
  label: string;
  className?: string;
  // Either a component (LucideIcon, react-icons, etc.) or an already-rendered element
  icon?: ElementType | ReactNode;
  size?: number;
  variant?: "primary" | "bordered";
  href?: string; // URL for Link functionality
  onClick?: () => void; // Click handler for button functionality
};

const CustomButton = ({
  label,
  icon: Icon,
  size = 16,
  variant = "primary",
  className,
  href,
  onClick,
}: TProps) => {
  const baseClasses =
    "font-bold cursor-pointer py-4 px-6 rounded-full flex items-center gap-2 transition duration-300";
  const variants = {
    primary:
      "bg-yellow-200 text-neutral-700 hover:bg-neutral-700 hover:text-yellow-200",
    bordered:
      "border border-neutral-700 text-neutral-700 hover:bg-neutral-700 hover:text-yellow-200",
  };

  const content = (
    <>
      <span className="group-hover:underline">{label}</span>

      {Icon && (
        <span className="bg-neutral-700 group-hover:bg-yellow-200 text-white group-hover:text-neutral-700 rounded-full p-1 flex items-center justify-center transition duration-300">
          {typeof Icon === "function" ? <Icon size={size} /> : Icon}
        </span>
      )}
    </>
  );

  const classes = `${baseClasses} ${variants[variant]} group ${
    className || ""
  } w-fit`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default CustomButton;
