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
      d="m7 48.063-3.637 3.43-3.236-3.43 3.236-3.431L7 48.062ZM91.531 145v-5 5Zm-42.969 5a5 5 0 0 1 0-10v10Zm-3.637-54.444L3.363 51.493l7.274-6.861L52.2 88.694l-7.275 6.862ZM3.363 44.632 44.925.569 52.2 7.431 10.637 51.493l-7.274-6.861ZM7 43.062h84.531v10H7v-10ZM91.531 150H48.562v-10h42.97v10ZM145 96.531C145 126.061 121.061 150 91.531 150v-10C115.538 140 135 120.538 135 96.531h10ZM91.531 43.062c29.53 0 53.469 23.94 53.469 53.47h-10c0-24.008-19.462-43.47-43.469-43.47v-10Z"
    />
  </Svg>
);
export default SvgComponent;
