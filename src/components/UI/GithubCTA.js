import React from "react";
import styled, { keyframes } from "styled-components";

import Icon from "react-eva-icons";

import { neutral } from "../../utils/theme";

const GITHUB_URL = "https://github.com/dimitrisraptis96/underline-generator";

const bounce = keyframes`
	0%, 100%, 20%, 50%, 80% {
		-webkit-transform: translateY(0);
		-ms-transform:     translateY(0);
		transform:         translateY(0)
	}
	40% {
		-webkit-transform: translateY(-16px);
		-ms-transform:     translateY(-16px);
		transform:         translateY(-16px)
	}
	60% {
		-webkit-transform: translateY(-8px);
		-ms-transform:     translateY(-8px);
		transform:         translateY(-8px)
	}
`;

const CTA = styled.a`
  position: absolute;
  top: 32px;
  right: 32px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  align-self: flex-end;

  cursor: pointer;

  font-family: "Prompt", sans-serif;
  font-size: 1rem;
  color: ${neutral[300]};
  svg {
    fill: ${neutral[300]};
  }

  text-decoration: none;

  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;

  &:hover {
    animation-name: ${bounce};
    -moz-animation-name: ${bounce};

    color: ${props => props.baseColor};
    svg {
      fill: ${props => props.baseColor};
    }
  }

  &:focus {
    outline-color: ${props => props.baseColor};
  }
`;

const GithubCTA = ({ baseColor }) => {
  return (
    <CTA
      baseColor={baseColor}
      href={GITHUB_URL}
      aria-label="Check the github repo"
    >
      <Icon
        name="github"
        fill="black"
        size="large"
        animation={{
          type: "pulse",
          hover: false,
          infinite: false,
        }}
      />
    </CTA>
  );
};

export default GithubCTA;
