import { ComponentProps } from "react"
import {joiner} from '../../../utils';

export type TDescription = ComponentProps<'p'> & {size: 'base' | 'sm', color: 'black' | 'gray'}
const Description = ({children, size, color}: TDescription) => {
  return (
    <p className={joiner(size === 'base' ? 'text-base' : 'text-sm', color === 'black' ? 'text-black' : 'text-gray-500')}>{children}</p>
  )
}

export default Description