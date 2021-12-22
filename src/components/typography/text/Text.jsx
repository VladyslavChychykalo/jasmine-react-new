import React from "react";
import StyledText from "./StyledText";

const Text = (props) => {
  const { children, ...restProps } = props;

  return <StyledText {...restProps}>{children}</StyledText>;
};

export default Text;
