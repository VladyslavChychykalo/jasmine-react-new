import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

export const StyledTD2 = styled.td`
  padding-left: 20px;
  padding-bottom: 15px;
  padding-right: 10px;

  &:last-of-type {
    padding-bottom: 0px;
  }
`;

export const StyledTD = styled.td`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  padding-right: 10px;
`;
