import { ComponentProps } from "react";

export type TDate = {
  colorType: "active" | "deactive";
} & ComponentProps<"span">;

export const Date = ({ children, colorType, ...rest }: TDate) => {
  return (
    <span
    className={`${colorType === 'active' ? 'text-blue-500' : 'text-gray-500'}`}
      {...rest}
    >
      {children}
    </span>
  );
};
