import { ComponentProps } from "react";

export type TButton = {
  colorType: "primary" | "secondary";
} & ComponentProps<"button">;

const joiner = (...classes: any) => classes.filter(Boolean).join(" ");

export const Button = ({ children, onClick, colorType, ...rest }: TButton) => {
  return (
    <button
      className={joiner(
        "rounded px-3 py-2 text-white font-semibold",
        colorType === "primary" ? "bg-blue-500 " : "bg-gray-400"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
