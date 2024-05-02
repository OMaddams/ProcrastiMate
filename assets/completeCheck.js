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
      d="M62 126.125c33.966 0 61.5-28.038 61.5-62.625S95.966.875 62 .875C28.035.875.5 28.913.5 63.5s27.535 62.625 61.5 62.625Zm-2.964-38.583 34.167-41.75-7.74-6.334-30.635 37.436-16.594-16.897-7.135 7.006 20.5 20.875 3.906 3.978 3.531-4.314Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
