import { Img } from "components/img/Img";

import { Text } from "components/text/Text";
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
          <Text classType="stitle">Indoor</Text>
          <div className="flex justify-between">
            <Text className="block font-semibold text-xl">Peace Lily</Text>
            <Text classType="sprice">$36.00</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
