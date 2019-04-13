import React from "react";

import Controls from "./Controls/Controls";
import Display from "./Display/Display";

import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1281px) {
    width: 60%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Body = ({
  cssCode,
  cssToCopied,
  baseColor,
  displayText,
  gradient,
  position,
  weight,
  handleChange,
}) => {
  return (
    <Container>
      <Display cssCode={cssCode} text={displayText} />

      <Controls
        cssCode={cssCode}
        cssToCopied={cssToCopied}
        baseColor={baseColor}
        gradient={gradient}
        position={position}
        weight={weight}
        handleChange={handleChange}
      />
    </Container>
  );
};

export default Body;
