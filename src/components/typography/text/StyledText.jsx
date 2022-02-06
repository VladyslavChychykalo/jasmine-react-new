import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const textSizes = {
  ss: "10px",
  s: "12px",
  m: "14px",
  l: "18px",
  xl: "24px",
  xxl: "48px",
};

const textWeights = {
  normal: 400,
  light: 300,
  semibold: 600,
  bold: 800,
};

const Text = (props) => {
  const { as: Element, children } = props;

  return <Element>{children}</Element>;
};

const StyledText = styled(Text)`
  font-family: "Lato", sans-serif;
  font-size: ${({ size }) => textSizes[size]};
  font-weight: ${({ weight }) => textWeights[weight]};
  text-transform: ${({ transform }) => transform};
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  letter-spacing: ${({ letterSpacing }) => letterSpacing + "px"};
  margin: ${({ margin }) => margin};
  line-height: ${({ lineHeight }) => lineHeight + "px"};
  word-break: break-word;
  white-space: ${({ whiteSpace }) => whiteSpace};
`;

StyledText.propTypes = {
  as: PropTypes.oneOf(["div", "p", "span", "small", "code"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
  letterSpacing: PropTypes.string || PropTypes.number,
  color: PropTypes.string,
  margin: PropTypes.string,
  whiteSpace: PropTypes.string,
};

StyledText.defaultProps = {
  as: "p",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
  letterSpacing: 0,
  color: "",
  margin: "0",
  lineHeight: "inherit",
  whiteSpace: "none",
};

export default StyledText;
