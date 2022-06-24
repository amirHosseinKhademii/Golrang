import { ComponentProps } from 'react'


export type TDropdown = {

} & ComponentProps<"select">;

export const Dropdown = ({ children, ...rest }: TDropdown) => {
    return (
        <select {...rest} >{children}</select>
    )
}
