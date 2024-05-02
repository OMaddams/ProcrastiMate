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
      d="m30.371 44.714-25.18-13.41C1.978 29.588 0 26.424 0 23s1.978-6.587 5.191-8.305l25.18-13.409c3.225-1.715 7.198-1.715 10.422.002 3.224 1.716 5.21 4.888 5.207 8.319v26.786c.002 3.431-1.983 6.603-5.207 8.32-3.224 1.716-7.197 1.716-10.422 0Zm3.126-38.435L8.317 19.656c-1.296.681-2.092 1.953-2.084 3.328-.013 1.384.783 2.668 2.084 3.36l25.18 13.377c.63.35 1.349.537 2.084.544 2.32 0 4.202-1.733 4.202-3.872V9.607c0-1.027-.443-2.012-1.23-2.738-.789-.726-1.858-1.134-2.972-1.134a4.4 4.4 0 0 0-2.084.544Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgComponent;
