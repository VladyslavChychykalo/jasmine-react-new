import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const textSizes = {
  s: "12px",
  m: "14px",
  l: "18px",
  xl: "48px",
};

const textWeights = {
  normal: 400,
  light: 300,
  semibold: 500,
  bold: 600,
};

const Text = (props) => {
  const { as: Element, children } = props;

  return <Element>{children}</Element>;
};

const StyledText = styled(Text)`
  font-size: ${({ size }) => textSizes[size]};
  font-weight: ${({ weight }) => textWeights[weight]};
  text-transform: ${({ transform }) => transform};
  text-align: ${({ align }) => align};
`;

StyledText.propTypes = {
  as: PropTypes.oneOf(["div", "p", "span", "small", "code"]),
  size: PropTypes.oneOf(["s", "m", "l", "xl"]),
  weight: PropTypes.oneOf(["normal", "light", "semibold", "bold"]),
  align: PropTypes.oneOf(["start", "center", "end"]),
  transform: PropTypes.oneOf(["uppercase", "lowercase", "capitalize", "none"]),
  children: PropTypes.node,
};

StyledText.defaultProps = {
  as: "p",
  size: "m",
  children: "",
  weight: "normal",
  align: "start",
  transform: "none",
};

export default StyledText;
