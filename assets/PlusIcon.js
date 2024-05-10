import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={54} height={54} fill="none">
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M10.8 0h32.4C49.165 0 54 4.835 54 10.8v32.4C54 49.165 49.165 54 43.2 54H10.8C4.835 54 0 49.165 0 43.2V10.8C0 4.835 4.835 0 10.8 0Zm37.001 47.801a6.506 6.506 0 0 0 1.906-4.601V10.8A6.507 6.507 0 0 0 43.2 4.293H10.8A6.507 6.507 0 0 0 4.293 10.8v32.4a6.507 6.507 0 0 0 6.507 6.507h32.4c1.726 0 3.38-.685 4.601-1.906Z"
      clipRule="evenodd"
    />
    <Path
      fill={themeColor}
      d="M37.8 24.975h-8.775V16.2a2.025 2.025 0 1 0-4.05 0v8.775H16.2a2.025 2.025 0 1 0 0 4.05h8.775V37.8a2.025 2.025 0 1 0 4.05 0v-8.775H37.8a2.025 2.025 0 1 0 0-4.05Z"
    />
  </Svg>
);
export default SvgComponent;
