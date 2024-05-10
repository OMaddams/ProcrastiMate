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
      d="m4 17.625-1.768 1.768-1.768-1.768 1.768-1.768L4 17.625ZM36.813 52v2.5V52Zm-17.188 2.5a2.5 2.5 0 0 1 0-5v5Zm-1.768-19.482L2.232 19.393l3.536-3.536 15.625 15.625-3.536 3.536ZM2.232 15.858 17.857.231l3.536 3.536L5.768 19.393l-3.536-3.536ZM4 15.124h32.813v5H4v-5ZM36.813 54.5H19.625v-5h17.188v5ZM56.5 34.812c0 10.874-8.814 19.688-19.688 19.688v-5c8.112 0 14.688-6.576 14.688-14.688h5ZM36.812 15.125c10.874 0 19.688 8.814 19.688 19.688h-5c0-8.112-6.576-14.688-14.688-14.688v-5Z"
    />
  </Svg>
);
export default SvgComponent;
