import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const textSizes = {
  s: "12px",
  m: "14px",
  l: "18px",
  xl: "24px",
  xxl: "48px",
};

const textWeights = {
  normal: 400,
  light: 300,
  bold: 700,
};

const Text = (props) => {
  const { as: Element, children } = props;

  return <Element>{children}</Element>;
};

const StyledHeading = styled(Text)`
  font-family: "Lato", sans-serif;
  font-size: ${({ size }) => textSizes[size]};
  font-weight: ${({ weight }) => textWeights[weight]};
  text-transform: ${({ transform }) => transform};
  text-align: ${({ align }) => align};
  letter-spacing: ${({ letterSpacing }) => letterSpacing + "px"};
  color: ${({ color }) => color};
`;

StyledHeading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  letterSpacing: PropTypes.string || PropTypes.number,
  color: PropTypes.string,
};

StyledHeading.defaultProps = {
  as: "h1",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  letterSpacing: 0,
  color: "",
};

export default StyledHeading;
