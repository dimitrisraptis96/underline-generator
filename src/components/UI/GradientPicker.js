import React from "react";
import styled from "styled-components";

import Icon from "react-eva-icons";
import { DropButton } from "grommet";

import GradientCircle from "./GradientCircle";

import gradients from "../../utils/gradients";
import { neutral } from "../../utils/theme";

const Dropdown = styled.div`
  padding: 0.75rem;
  max-width: 160px;
  max-height: 200px;
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;

  font-family: "Prompt", sans-serif;
  font-size: 0.8rem;
  font-weight: normal;
  color: ${neutral[300]};
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    flex: 1 1 32px;
  }
`;

const StyledDropButton = styled(DropButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 160px;
`;

const GradientPicker = ({ gradient, handleChange }) => {
  return (
    <StyledDropButton
      alignSelf="center"
      dropContent={
        <Dropdown>
          <Label>Pick a gradient:</Label>
          <Grid>
            {gradients.slice(20, 70).map(gradient => (
              <GradientCircle
                colors={gradient.colors}
                value={gradient.colors}
                onClick={() =>
                  handleChange("gradient")({
                    target: { value: gradient.colors },
                  })
                }
                style={{ margin: ".5rem" }}
              />
            ))}
          </Grid>
        </Dropdown>
      }
      dropProps={{ align: { top: "bottom", left: "left" } }}
    >
      <GradientCircle colors={gradient} />
      <Icon
        name="chevron-down-outline"
        size="medium"
        animation={{
          type: "pulse",
          hover: false,
          infinite: false,
        }}
        fill={neutral[200]}
        onChange={handleChange("gradient")}
      />
    </StyledDropButton>
  );
};

export default GradientPicker;
