import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #d6b095;
  height: 100%;
  max-height: 561px;
  padding: 0px 25px;
  padding-top: 57px;
  position: relative;
  z-index: 100;
`;

const Test = styled.div`
  position: absolute;
  height: ${({ realHeight }) => (!realHeight ? "100%" : realHeight + "px")};
  width: 100%;
  backdrop-filter: blur(4px);
  top: 0;
  bottom: 0;
  z-index: 99;
`;

export const TestStyled = () => {
  const [realHeight, setRealHeight] = useState(0);

  useEffect(() => {
    const bodyHeight = document.body.scrollHeight;
    setRealHeight(bodyHeight);

    const getBodyHeight = () => {
      const bodyHeight = document.body.scrollHeight;
      setRealHeight(bodyHeight);
    };

    window.addEventListener("resize", getBodyHeight);

    return () => window.removeEventListener("resize", getBodyHeight);
  }, []);

  return <Test realHeight={realHeight} />;
};
