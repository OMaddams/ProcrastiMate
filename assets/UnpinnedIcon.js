import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={40} height={50} fill="none">
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M9.645.012h20.71c2.433-.12 4.818.672 6.627 2.203 1.81 1.532 2.896 3.676 3.018 5.96v39.037a2.7 2.7 0 0 1-.959 2.057 3.082 3.082 0 0 1-2.266.72 3.456 3.456 0 0 1-2.012-.639l-12.81-9.135a3.583 3.583 0 0 0-4.083 0L5.178 49.35a3.454 3.454 0 0 1-1.953.639c-.83.07-1.653-.191-2.267-.72A2.7 2.7 0 0 1 0 47.212V8.175c.122-2.284 1.208-4.428 3.018-5.96C4.828.684 7.212-.109 9.645.012Zm15.06 36.9 10.798 7.774-.06-36.511c-.28-2.42-2.56-4.193-5.147-3.998H9.586C7 3.982 4.718 5.754 4.438 8.175v36.51l10.799-7.774c2.796-1.999 6.67-1.999 9.467 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
