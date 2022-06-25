import { ComponentProps } from "react";
import { joiner } from "utils";

export type TButton = {
  colorType: "primary" | "secondary";
} & ComponentProps<"button">;

export const Button = ({ children, onClick, colorType, ...rest }: TButton) => {
  return (
    <button
      className={joiner(
        "rounded p-3 text-white",
        colorType === "primary" ? "bg-cyan-300 " : "bg-gray-400"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
