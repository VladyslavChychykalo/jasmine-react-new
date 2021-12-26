import React from "react";
import StyledHeading from "./StyledHeading";

const Heading = (props) => {
  const { children, ...restProps } = props;

  return <StyledHeading {...restProps}>{children}</StyledHeading>;
};

export default Heading;
