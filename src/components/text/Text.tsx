import { ComponentProps, ElementType } from "react";
import { joiner } from "utils";

type TBaseText<T extends ElementType> = {
  classType?: "stitle" | "sprice";
  as?: T;
};

export type TText<T extends ElementType> = TBaseText<T> &
  Omit<ComponentProps<T>, keyof TBaseText<T>>;

export const Text = <T extends ElementType>({
  children,
  classType,
  as,
  ...rest
}: TText<T>) => {
  const Component = as ?? "span";
  return (
    <Component
      className={joiner(
        "block",
        classType === "stitle"
          ? "opacity-75 -mb-1"
          : "bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center"
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
