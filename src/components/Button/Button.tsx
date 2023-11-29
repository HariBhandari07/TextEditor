import React, { ComponentProps } from "react";
import "./Button.css";


type Color = "green" | "warning" | "danger" | "info";

export interface ButtonProps extends ComponentProps<"button"> {
  color?: Color;
  children?: React.ReactNode;
}

export function Button({ color, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="button"
      style={{
        background: color === "green" ? "#e6ffe6"
          : color === "warning" ? "#ffffd7"
            : color === "danger" ? "#ffefef" : "#f8f9fa",
      }}>
      {children}
    </button>
  );
};
