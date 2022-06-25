import { Button } from "components/button/Button";
import { Img } from "components/img/Img";
import { Input } from "components/input/Input";
import { Span } from "components/span/Span";
import { Svg } from "components/svg/Svg";

export const Card = () => {
  const src =
    "https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png";
  const alt = "golrang";
  return (
    <div className="p-24 flex flex-wrap items-center justify-center">
      <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
        <Svg>
          <rect
            x="159.52"
            y="175"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 159.52 175)"
            fill="white"
          />
          <rect
            y="107.48"
            width="152"
            height="152"
            rx="8"
            transform="rotate(-45 0 107.48)"
            fill="white"
          />
        </Svg>

        <Img src={src} alt={alt}></Img>

        <div className="relative text-white px-6 pb-6 mt-6">
          <Span classType="stitle">Indoor</Span>
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">Peace Lily</span>
            <Span classType="sprice">$36.00</Span>
          </div>
        </div>
      </div>
    </div>
  );
};
