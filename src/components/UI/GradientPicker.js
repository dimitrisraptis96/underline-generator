import React from "react";
import styled from "styled-components";

import Icon from "react-eva-icons";
import { DropButton } from "grommet";

import Card from "./Card";
import GradientCircle from "./GradientCircle";

import gradients from "../../utils/gradients";
import { neutral } from "../../utils/theme";

const CustomCard = styled(Card)`
  display: flex;
  flex-direction: column !important;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;

  min-height: 100px;
  min-width: 100px;
`;

const StyledDropButton = styled(DropButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GradientPicker = ({ gradient, handleChange }) => {
  return (
    <StyledDropButton
      alignSelf="center"
      margin={{ vertical: "small" }}
      dropContent={
        <CustomCard>
          {gradients.slice(20, 23).map((gradient) => (
            <GradientCircle
              colors={gradient.colors}
              value={gradient.colors}
              onClick={() =>
                handleChange("gradient")({ target: { value: gradient.colors } })
              }
            />
          ))}
        </CustomCard>
      }
      dropProps={{ align: { top: "bottom" } }}
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
