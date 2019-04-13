import React from "react";
import styled from "styled-components";
import { neutral } from "../../utils/theme";

import Icon from "react-eva-icons";

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* @media (min-width: 1281px) {
    min-width: 30%;
    max-width: 30%;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    min-width: 30%;
    max-width: 30%;
  } */
  @media (min-width: 1px) and (max-width: 767px) {
    min-width: 100%;
  }
`;

const Label = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-right: 1rem;

  svg {
    margin-right: 0.25rem;
    display: flex;
  }

  font-family: "Prompt", sans-serif;
  font-size: 0.8rem;
  font-weight: normal;
  color: ${neutral[300]};
`;

const Option = ({ children, icon, title }) => {
  return (
    <OptionContainer>
      <Label>
        <Icon
          name={icon}
          size="medium"
          animation={{
            hover: false,
          }}
          fill={neutral[300]}
        />
        {title}
      </Label>
      {children}
    </OptionContainer>
  );
};

export default Option;
