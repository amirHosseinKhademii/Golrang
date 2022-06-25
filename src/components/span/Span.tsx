import { ComponentProps } from "react";


export type TSpan = {
  classType: "stitle" | "sprice";
} & ComponentProps<"span">;


const joiner = (...classes: any) => classes.filter(Boolean).join(" ");

export const Span = ({ children,classType }: TSpan) => {
  return (
    <>
    <span 
    className={joiner(
      "block",
      classType === "stitle" ? "opacity-75 -mb-1" :
      //  "font-semibold text-xl" :
       "bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
    )}
    >{children}</span>
    </>
  );
};
