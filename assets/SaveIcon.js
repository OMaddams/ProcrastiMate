import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={containerStyle.width}
    height={containerStyle.height}
    fill="none"
  >
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M12 0h27l15 15v27c0 6.627-5.373 12-12 12H12C5.373 54 0 48.627 0 42V12C0 5.373 5.373 0 12 0Zm35.364 47.364A7.5 7.5 0 0 0 49.56 42l.09-25.08L37.17 4.44H12A7.5 7.5 0 0 0 4.44 12v30A7.5 7.5 0 0 0 12 49.56h30a7.5 7.5 0 0 0 5.364-2.197Z"
      clipRule="evenodd"
    />
    <Path
      fill={themeColor}
      d="M31.59 10.77H9.3a2.25 2.25 0 0 0 0 4.5h22.29a2.25 2.25 0 0 0 0-4.5Z"
    />
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M9.762 32.85a6.39 6.39 0 0 1 5.928-3.93 6.36 6.36 0 0 1 6.36 6.36 6.39 6.39 0 1 1-12.288-2.43Zm4.16 3.174a1.89 1.89 0 1 0 3.475-1.488 1.89 1.89 0 0 0-3.474 1.488Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
