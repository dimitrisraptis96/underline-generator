import React from "react";
import PropTypes from "prop-types";

import { RangeInput } from "grommet";

const Slider = ({ min, max, step, value, onChange }) => {
  return (
    <RangeInput
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
    />
  );
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  min: 0,
  max: 1,
  step: 0.1,
  value: 0.1 * getRandomInt(10),
  onChange: () => {},
};

export default Slider;
