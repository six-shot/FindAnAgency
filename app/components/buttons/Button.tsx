"use client";
import { MouseEventHandler } from "react";
const getVariant = (variant?: VariantType) => {
  switch (variant) {
    case "primary":
      return "bg-[#83C146] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75";

    case "outline-primary":
      return "bg-white text-black border border-black hover:text-white hover:bg-[#181818]";

    default:
      return "bg-blue-700 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
  }
};

type VariantType = "primary" | "outline-primary";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: VariantType;
  square?: boolean;
  paddingLess?: boolean;
  OnClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
}
export const Button = ({
  className,
  children,
  variant,
  square,
  paddingLess,
  type = "button",
  onClick,
  ...props
}: IButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={`
   
          ${getVariant(variant)}  transition duration-75  ${
        !paddingLess && "sm:px-7 sm:py-2 px-2 py-1  text-sm"
      }  ${
        !square && "rounded sm:rounded-[5px]"
      } active:scale-95 ${className} font-silka`}
    >
      {children}
    </button>
  );
};
