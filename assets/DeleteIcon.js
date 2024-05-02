import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
    style={containerStyle}
  >
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M10.8 0h32.4C49.165 0 54 4.835 54 10.8v32.4C54 49.165 49.165 54 43.2 54H10.8C4.835 54 0 49.165 0 43.2V10.8C0 4.835 4.835 0 10.8 0Zm37.173 47.973A6.75 6.75 0 0 0 49.95 43.2V10.8a6.75 6.75 0 0 0-6.75-6.75H10.8a6.75 6.75 0 0 0-6.75 6.75v32.4a6.75 6.75 0 0 0 6.75 6.75h32.4a6.75 6.75 0 0 0 4.773-1.977Z"
      clipRule="evenodd"
    />
    <Path
      fill={themeColor}
      d="M38.448 24.975H15.552a2.025 2.025 0 1 0 0 4.05h22.896a2.025 2.025 0 1 0 0-4.05Z"
    />
  </Svg>
);
export default SvgComponent;
