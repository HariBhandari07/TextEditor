import React, { ComponentProps } from "react";
import './Button.css'


type Color = "primary" | "warning" | "danger";
type Variant = "contained" | "outlined" | "text";

export interface ButtonProps extends ComponentProps<"button"> {
  color?: Color;
  variant?: Variant;
  children?: React.ReactNode;
}

export function Button({ color, variant, children, ...props }: ButtonProps) {
  return (
    <button {...props} className='button'>
      {children}
    </button>
  );
};
