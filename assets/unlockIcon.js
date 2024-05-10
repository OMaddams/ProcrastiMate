import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
    style={containerStyle}
  >
    <Path
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M37.1 21.5H5.9A3.9 3.9 0 0 0 2 25.4v23.4a3.9 3.9 0 0 0 3.9 3.9h31.2a3.9 3.9 0 0 0 3.9-3.9V25.4a3.9 3.9 0 0 0-3.9-3.9ZM35.15 21.5v-5.85a13.649 13.649 0 0 0-23.302-9.652"
    />
    <Path
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M21.5 39.05a1.95 1.95 0 1 0 0-3.9 1.95 1.95 0 0 0 0 3.9Z"
    />
  </Svg>
);
export default SvgComponent;
