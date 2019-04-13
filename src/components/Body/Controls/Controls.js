import React from "react";
import styled from "styled-components";

import Card from "../../UI/Card";
import CopyButton from "../../UI/CopyButton";
import GradientPicker from "../../UI/GradientPicker";
import Option from "../../UI/Option";
import Slider from "../../UI/Slider";

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:nth-child(1) {
    margin-right: 1rem;
  }

  @media (min-width: 1px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    box-sizing: content-box;

    > div:nth-child(1) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const Controls = ({
  cssCode,
  cssToCopied,
  baseColor,
  gradient,
  position,
  weight,
  handleChange,
}) => {
  return (
    <Container>
      <Card>
        <Option icon="color-palette-outline" title="Gradient:">
          <GradientPicker handleChange={handleChange} gradient={gradient} />
        </Option>

        <Option icon="layers-outline" title="Position:">
          <Slider
            value={position}
            min={0}
            max={100}
            step={10}
            label="position"
            onChange={handleChange("position")}
          />
        </Option>

        <Option icon="crop-outline" title="Weight:">
          <Slider
            value={weight}
            min={0.1}
            max={1}
            step={0.1}
            label="weight"
            onChange={handleChange("weight")}
          />
        </Option>
      </Card>

      <CopyButton cssCode={cssToCopied} grow={1} baseColor={baseColor} />
    </Container>
  );
};

export default Controls;
