import { ComponentProps } from "react";

export type TImg = ComponentProps<"img">;

export const Img = ({ src, alt, ...rest }: TImg) => {
  return (
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <img className="relative w-40" src={src} alt={alt} {...rest} />
    </div>
  );
};
