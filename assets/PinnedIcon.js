import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={41} height={51} fill="none">
    <Path
      fill={themeColor}
      fillRule="evenodd"
      d="M10.065.335h20.71c2.433-.12 4.818.672 6.627 2.204 1.81 1.531 2.895 3.675 3.018 5.96v39.036a2.7 2.7 0 0 1-.959 2.058 3.082 3.082 0 0 1-2.266.719 3.456 3.456 0 0 1-2.012-.639l-12.81-9.134a3.582 3.582 0 0 0-4.083 0L5.597 49.673a3.454 3.454 0 0 1-1.952.639c-.83.07-1.653-.19-2.267-.72a2.7 2.7 0 0 1-.958-2.057V8.498c.122-2.284 1.208-4.428 3.018-5.96C5.248 1.009 7.632.215 10.065.336Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
