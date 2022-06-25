import { ComponentProps } from "react";

export type TImg = ComponentProps<"img">;

export const Img = ({src,alt, ...rest }: TImg) => {
  return (
<>
<div className="relative pt-10 px-10 flex items-center justify-center">
<div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" 
style={{background: 'radial-gradient(black, transparent 60%)',transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)' ,opacity: '0.2'}}>
</div>
<img 
className="relative w-40"
{...rest}
src ={src}
  alt={alt}/>
</div>
</>

  );
};
