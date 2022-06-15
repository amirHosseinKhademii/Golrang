import { ComponentProps } from "react"

export type TSubHeader = ComponentProps<'h3'> & {size: 'sm' | 'lg'} & {color: 'gray' | 'black'}

const SubHeader = ({children, size, color}: TSubHeader) => {
  return (
    <h3 className={`text-center ${size === 'sm' ? 'text-sm' : 'text-lg'} ${color === 'black' ? 'text-black': 'text-gray-500'}`}>{children}</h3>
  )
}

export default SubHeader