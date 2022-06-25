import { ComponentProps } from "react";

export type TIconWrapper = ComponentProps<"svg">;

export const IconWrapper = ({ children, ...rest }: TIconWrapper) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      {children}
    </svg>
  );
};
