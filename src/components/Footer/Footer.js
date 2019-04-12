import React from "react";
import styled from "styled-components";
import { neutral } from "../../utils/theme";

const Wrapper = styled.div`
  max-width: 100%;
  margin-top: 2em;
  padding: 2em 0 1em 0;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: salmon; */
`;

const Sup = styled.sup`
  font-family: "Prompt", sans-serif;
  font-size: 0.65rem;
  color: ${neutral[400]};
`;

const A = styled.a`
  color: ${(props) => props.baseColor};
  font-weight: bold;
  font-size: 0.75rem;
`;

const Footer = ({ baseColor }) => {
  return (
    <Wrapper>
      <Sup>
        Designed and Build by{" "}
        <A href="https://twitter.com/d__raptis" baseColor={baseColor}>
          @draptis
        </A>
      </Sup>
    </Wrapper>
  );
};

export default Footer;
