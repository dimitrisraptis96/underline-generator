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
        Underline Generator <sup style={{ fontSize: ".75rem" }}>&copy;</sup>
      </Bold>
    </LogoWrapper>
  );
};

export default Header;
