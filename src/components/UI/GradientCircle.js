import React from "react";
import styled from "styled-components";
import { rgba } from "polished";

const GradientCircle = styled.div`
  min-width: 24px;
  min-height: 24px;
  max-width: 24px;
  max-height: 24px;

  margin-right: 4px;
  border-radius: 50px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -webkit-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -moz-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -o-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;

  ${props =>
    props.selected
      ? `
      border: 3px solid ${props.colors[0]};
      background-color: white;
    `
      : `background: linear-gradient(-45deg, ${props.colors.join()});`};

  :hover {
    transform: translateY(-2px) scale(1.1);
    box-shadow: 0 5px 10px ${props => rgba(props.colors[0], 0.5)};
  }
`;

export default GradientCircle;
