import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={39}
    height={41}
    fill="none"
    style={containerStyle}
  >
    <Path
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M2 10.52h34.077M6.26 10.52h25.557v25.557a2.84 2.84 0 0 1-2.84 2.84H9.1a2.84 2.84 0 0 1-2.84-2.84V10.519Z"
    />
    <Path
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M11.94 10.52V9.1a7.1 7.1 0 1 1 14.198 0v1.42M14.779 19.043v11.363M23.298 19.043v11.363"
    />
  </Svg>
);
export default SvgComponent;
