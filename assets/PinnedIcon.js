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
      fill={themeColor}
      d="M23.142 34.837 14.92 28.53a2.185 2.185 0 0 0-2.645 0l-8.3 6.306A2.089 2.089 0 0 1 .584 33.36V6.412A5.942 5.942 0 0 1 6.832.758h13.416a5.942 5.942 0 0 1 6.21 5.75v26.853a2.09 2.09 0 0 1-3.316 1.476Z"
    />
  </Svg>
);
export default SvgComponent;
