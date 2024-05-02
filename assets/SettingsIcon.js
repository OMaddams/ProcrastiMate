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
      fillRule="evenodd"
      d="M33.017 12.9a2.377 2.377 0 0 0 2.192 1.475 2.377 2.377 0 0 1 2.358 2.377v4.101a2.377 2.377 0 0 1-2.377 2.377 2.377 2.377 0 0 0-1.667 4.063 2.415 2.415 0 0 1 0 3.374l-2.876 2.875a2.415 2.415 0 0 1-3.373 0 2.262 2.262 0 0 0-1.667-.71 2.377 2.377 0 0 0-2.396 2.377 2.377 2.377 0 0 1-2.377 2.377h-4.101a2.377 2.377 0 0 1-2.377-2.377 2.377 2.377 0 0 0-2.396-2.377 2.262 2.262 0 0 0-1.668.71 2.415 2.415 0 0 1-3.373 0l-2.875-2.875a2.415 2.415 0 0 1 0-3.374 2.377 2.377 0 0 0-1.667-4.063A2.377 2.377 0 0 1 0 20.853v-4.101a2.377 2.377 0 0 1 2.377-2.377 2.377 2.377 0 0 0 1.667-4.063 2.415 2.415 0 0 1 0-3.374L6.92 4.063a2.415 2.415 0 0 1 3.374 0 2.262 2.262 0 0 0 1.667.71 2.377 2.377 0 0 0 2.396-2.396A2.377 2.377 0 0 1 16.733 0h4.12a2.377 2.377 0 0 1 2.377 2.377 2.377 2.377 0 0 0 2.396 2.396c.63.006 1.235-.251 1.667-.71a2.415 2.415 0 0 1 3.374 0l2.875 2.875a2.415 2.415 0 0 1 0 3.374c-.683.677-.89 1.7-.525 2.589Zm-2.734 10.694a5.213 5.213 0 0 1 4.428-3.22l-.058-3.143a5.213 5.213 0 0 1-4.37-3.22 5.29 5.29 0 0 1 .863-5.367L28.942 6.44a5.175 5.175 0 0 1-3.335 1.207 5.29 5.29 0 0 1-5.252-4.772h-3.143a5.27 5.27 0 0 1-5.252 4.772A5.175 5.175 0 0 1 8.625 6.44L6.478 8.644a5.29 5.29 0 0 1 .805 5.367 5.213 5.213 0 0 1-4.37 3.22v3.143a5.213 5.213 0 0 1 4.37 3.22 5.29 5.29 0 0 1-.862 5.367l2.204 2.204a5.175 5.175 0 0 1 3.335-1.207 5.29 5.29 0 0 1 5.252 4.772h3.143a5.233 5.233 0 0 1 5.252-4.772c1.219-.003 2.4.424 3.335 1.207l2.146-2.204a5.29 5.29 0 0 1-.805-5.367Z"
      clipRule="evenodd"
    />
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M12.152 18.802a6.632 6.632 0 1 1 13.263 0 6.632 6.632 0 0 1-13.263 0Zm2.798 0a3.833 3.833 0 1 0 7.667 0 3.833 3.833 0 0 0-7.667 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;