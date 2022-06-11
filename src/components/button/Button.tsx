import { ComponentProps } from "react";

export type TButton = {
  golrang: "primary" | "secondary";
} & ComponentProps<"button">;

const joiner = (...classes: any) => classes.filter(Boolean).join(" ");

export const Button = ({ children, onClick, golrang, ...rest }: TButton) => {
  return (
    <button
      className={joiner(
        "rounded p-3 text-white",
        golrang === "primary" ? "bg-cyan-300 " : "bg-gray-400"
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
