import React from "react";
import PropTypes from "prop-types";

import { primary } from "../../../utils/theme";

import styled from "styled-components";

// https://stackoverflow.com/questions/22131214/how-to-highlight-text-inside-an-input-field

const Input = styled.div`
  /* input[type="search"] { */

  border: 1px dotted #999;
  border-radius: 0;

  box-sizing: border-box;

  width: 100%;
  /* height: 500px; */

  padding: 2rem;
  margin-bottom: 2rem;

  -webkit-appearance: none;

  background-color: transparent;

  &:first-line {
    ${(props) => props.cssCode}
  }
`;

Input.defaultProps = {};

export default Input;
