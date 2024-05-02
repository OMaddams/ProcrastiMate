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
      d="M6.751.758h14.497c1.704-.083 3.373.464 4.64 1.52C27.154 3.336 27.914 4.816 28 6.392v26.935a1.853 1.853 0 0 1-.671 1.42 2.178 2.178 0 0 1-1.586.496 2.444 2.444 0 0 1-1.409-.44l-8.967-6.303a2.537 2.537 0 0 0-2.858 0l-8.885 6.303a2.441 2.441 0 0 1-1.367.44 2.178 2.178 0 0 1-1.586-.496A1.853 1.853 0 0 1 0 33.326V6.391c.086-1.576.846-3.056 2.112-4.112C3.38 1.222 5.048.675 6.752.759Zm10.542 25.46 7.559 5.365-.041-25.192c-.196-1.67-1.794-2.893-3.604-2.759H6.71C4.9 3.498 3.303 4.72 3.107 6.391v25.192l7.559-5.364c1.957-1.38 4.67-1.38 6.627 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
