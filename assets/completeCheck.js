import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgComponent = ({ themeColor, containerStyle }) => (
  <Svg
    width="33"
    height="33"
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.2036 33C25.1526 33 32.4072 25.6127 32.4072 16.5C32.4072 7.3873 25.1526 0 16.2036 0C7.2546 0 0 7.3873 0 16.5C0 25.6127 7.2546 33 16.2036 33ZM15.9174 22.941L24.6566 12.2622L20.7872 9.09556L13.8134 17.6172L10.5229 14.2666L6.9555 17.77L12.199 23.1094L14.1521 25.0982L15.9174 22.941Z"
      fill={themeColor}
    />
  </Svg>
);
export default SvgComponent;
