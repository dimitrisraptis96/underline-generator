import React from "react";
import PropTypes from "prop-types";
import {lighten} from "polished";

import { Grommet, RadioButton } from "grommet";
import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const themeCreator = (color) => (
  deepMerge(grommet, {
    radioButton: {
      gap: "medium",
      font: {
        family: "Monospace"
      },
      size: "14px",
      color: color,
      hover: {
        border: {
          color: lighten(0.1, color)
        }
      },
      check: {
        color: {
          light: color
        },
      },
      icon: {
        size: "12px",
      }
    }
  })
)
const RadioButtons = ({ selectedItem, options, onChange, color }) => {

  const customTheme = themeCreator(color);

  return (
    <React.Fragment>
      <Grommet theme={customTheme}>
        {options.map(option => (
          <RadioButton
            style={{fontFamily: 'Consolas, monaco, monospace !important'}}
            label={option.label}
            name="radio"
            value={option.value}
            checked={selectedItem === option.value}
            onChange={onChange}
          />
        ))}
      </Grommet>
    </React.Fragment>
  );
};

RadioButtons.propTypes = {
  selectedItem: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func
};

RadioButtons.defaultProps = {
  selectedItem: "",
  options: [],
  onChange: () => {}
};

export default RadioButtons;
