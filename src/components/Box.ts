import styled from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BordersProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system";

type BoxProps = BackgroundProps &
  BordersProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  ShadowProps &
  SpaceProps &
  TextAlignProps;

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${shadow}
  ${space}
  ${textAlign}
`;

Box.displayName = "Box";

export default Box;
