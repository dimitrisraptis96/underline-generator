import { css } from "styled-components";

const sizes = {
  desktop: {
    min: 1280,
    max: 2000,
  },
  laptop: {
    min: 1025,
    max: 1280,
  },
  tablet: {
    min: 768,
    max: 1024,
  },
  mobile: {
    min: 320,
    max: 767,
  },
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const minEmSize = sizes[label].min / 16;
  const maxEmSize = sizes[label].max / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${minEmSize}em and max-width: ${maxEmSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
