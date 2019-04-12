import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import { neutral } from "../../../utils/theme";

const Container = styled.div`
  border: 2px dotted #999;
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;

  padding: 4rem 2rem;
  margin-bottom: 2rem;

  background-color: transparent;

  > span {
    ${(props) => props.cssCode}
  }

  color: ${neutral[500]};
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  line-height: 1.2em;
`;

const Display = ({ cssCode, text }) => {
  return (
    <Container cssCode={cssCode}>
      <span>{text}</span>
    </Container>
  );
};

Display.defaultProps = {};

export default Display;
