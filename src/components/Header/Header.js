import React from "react";
import styled from "styled-components";

import Logo from "../UI/Logo";
import { neutral } from "../../utils/theme";

const LogoWrapper = styled.div`
  box-sizing: border-box;

  width: 100%;
  margin: 1em;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Bold = styled.h1`
  color: ${neutral[500]};
  font-weight: bold;
  font-size: 1.35rem;
  text-align: center;

  > span {
    background-image: linear-gradient(
      120deg,
      ${neutral[100]},
      ${neutral[100]} 100%
    );
    background-repeat: no-repeat;
    background-size: 100% 0.3em;
    background-position: 0 80%;
    transition: background-size 0.25s ease-in;

    &:hover {
      background-size: 100% 88% !important;
    }
  }
`;

const IconWrapper = styled.div`
  margin-right: 2em;
`;

const Header = ({ baseColor, gradient }) => {
  return (
    <LogoWrapper>
      <Logo
        width={"100px"}
        height={"100px"}
        baseColor={baseColor}
        gradient={gradient}
      />
      <Bold>
        <span>Underline Generator</span>
        <sup style={{ fontSize: ".75rem" }}>&nbsp; &copy;</sup>
      </Bold>
    </LogoWrapper>
  );
};

export default Header;
