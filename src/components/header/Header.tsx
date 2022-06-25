import { ComponentProps } from "react"

const joiner = (...classes: any) => classes.filter(Boolean).join(" ");

export type THeader = ComponentProps<'h1'> & {size: 'xl' | '2xl', color: 'gray' | 'black'}

const Header = ({children, size, color}: THeader) => {
  return (
    <h1 className={joiner('text-center', size === 'xl' ? 'text-xl' : 'text-2xl', color === 'black' ? 'text-black': 'text-gray-500')}>{children}</h1>
  )
}

export default Header