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
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.908 7.615H2.323C1.593 7.615 1 8.208 1 8.938v7.939c0 .73.592 1.323 1.323 1.323h10.585c.73 0 1.323-.592 1.323-1.323V8.938c0-.73-.593-1.323-1.323-1.323ZM12.246 7.615V5.631a4.63 4.63 0 1 0-9.261 0v1.984"
    />
    <Path
      stroke={themeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.615 13.57a.662.662 0 1 0 0-1.324.662.662 0 0 0 0 1.323Z"
    />
  </Svg>
);
export default SvgComponent;
