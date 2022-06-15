import { ComponentProps } from "react"

export type TTitle = ComponentProps<'h3'> & {size: 'base' | 'lg'} & {color: 'black' | 'gray'}
const Title = ({children, size, color}: TTitle) => {
  return (
    <h3 className={`font-semibold ${size === 'base' ? 'text-base' : 'text-lg'} ${color === 'black' ? 'text-black' : 'text-gray-500'}`}>{children}</h3>
  )
}

export default Title