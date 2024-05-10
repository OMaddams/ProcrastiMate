import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const CompleteCheck = ({ themeColor, containerStyle }) => (
  <Svg
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Circle */}
    <Circle
      cx={containerStyle.width / 2}
      cy={containerStyle.height / 2}
      r={24} // Adjust radius as needed
      fill={themeColor}
    />

    {/* Checkmark */}
    <Path
      d={`M${containerStyle.width / 2 - 10},${containerStyle.height / 2} L${
        containerStyle.width / 2 - 5
      },${containerStyle.height / 2 + 10} L${containerStyle.width / 2 + 15},${
        containerStyle.height / 2 - 10
      }`} // Adjust path coordinates for centering
      stroke="#33363F"
      strokeWidth={5} // Adjust stroke width as needed
    />
  </Svg>
);

export default CompleteCheck;
