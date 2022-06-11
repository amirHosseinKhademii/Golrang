import { ComponentProps } from "react";

export type TInput = ComponentProps<"input"> & { label?: string };

export const Input = ({ label, name, ...rest }: TInput) => {
  return (
    <div className="flex flex-col items-start">
      {label && <label htmlFor="id1">{label}</label>}
      <input
        className=" px-2 w-full h-12 bg-gray-200 rounded focus:ring-1 focus:ring-blue-300"
        id={name}
        {...rest}
      />
    </div>
  );
};
