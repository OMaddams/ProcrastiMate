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
    <Circle cx={16.5} cy={16.5} r={15.5} stroke={themeColor} strokeWidth={2} />
  </Svg>
);
export default SvgComponent;
