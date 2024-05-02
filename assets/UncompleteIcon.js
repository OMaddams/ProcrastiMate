import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
  >
    <Path cx={16.5} cy={16.5} r={15.5} stroke={themeColor} strokeWidth={2} />
  </Svg>
);
export default SvgComponent;
