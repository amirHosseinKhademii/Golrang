import { ComponentProps } from "react"
import {joiner} from '../../../utils';

export type TSubHeader = ComponentProps<'h3'> & {size: 'sm' | 'lg', color: 'gray' | 'black'}

const SubHeader = ({children, size, color}: TSubHeader) => {
  return (
    <h3 className={joiner('text-center', size === 'sm' ? 'text-sm' : 'text-lg', color === 'black' ? 'text-black': 'text-gray-500')}>{children}</h3>
  )
}

export default SubHeader