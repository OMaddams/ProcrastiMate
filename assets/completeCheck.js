import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
const CompleteCheck = ({ themeColor, containerStyle }) => (
  <Svg
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Circle cx={18.5} cy={18.5} r={18.5} fill={themeColor} />
    <Path
      d="M8 18.238L16.09 26.4761L29.5735 10"
      stroke="#33363F"
      stroke-width={15}
    />
  </Svg>
);
export default CompleteCheck;
