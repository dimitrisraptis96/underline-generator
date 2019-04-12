import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { tint, rgba } from 'polished';

const Container = styled.div`
  max-width: 150px;

`;

const Label = styled.p`
  font-family: "Karla", sans-serif;
  margin: .5rem .5rem;
  font-size: .8em;
  color: silver;
`;

const FormatGroupLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
});

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? color : isFocused ? rgba(color, 0.1) : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? '#212121'
          : tint(0.2, color),
      cursor: isDisabled ? 'not-allowed' : 'default',
    };
  },
  input: styles => ({ ...styles, ...dot() }),
  placeholder: styles => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

export default ({ color, label, options, defaultOption, onChange }) => (
  <Container>
    <Label>{label}</Label>
    <Select
      defaultValue={defaultOption}
      options={options}
      onChange={onChange}
      styles={colourStyles}
    />
  </Container>
);
