import { ComponentProps } from "react";

export type TDate = {
  colorType: "active" | "deactive";
} & ComponentProps<"span">;

const joiner = (...classes: any) => classes.filter(Boolean).join(" ");

export const Date = ({ children, colorType, ...rest }: TDate) => {
  return (
    <span
    className={joiner(colorType === 'active' ? 'text-blue-500' : 'text-gray-500')}
      {...rest}
    >
      {children}
    </span>
  );
};
