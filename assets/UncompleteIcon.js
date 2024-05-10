import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
  >
    <Circle
      cx={containerStyle.width / 2}
      cy={containerStyle.height / 2}
      r={24}
      stroke={themeColor}
      strokeWidth={2}
    />
  </Svg>
);
export default SvgComponent;
