import React from "react";
import styled from "styled-components";

import Icon from "react-eva-icons";

import { neutral } from "../../utils/theme";

const GITHUB_URL = "https://github.com/dimitrisraptis96/underline-generator";

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

  &:hover {
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
