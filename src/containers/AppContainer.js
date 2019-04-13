import React from "react";
import { css } from "styled-components";

import App from "../App";

class AppContainer extends React.Component {
  state = {
    weight: 0.3,
    position: 20,
    gradient: ["#ec008c", "#fc6767"],
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  isMobileDevice = () => {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  };

  getDisplayText = () => {
    return this.isMobileDevice()
      ? "Hey buddy! Dare you to open me on a desktop!"
      : "Hey buddy! Dare you to hover me!";
  };

  getCSS = () => {
    const { gradient, position, weight } = this.state;

    const degree = 120;

    const mixin = css`
      background-image: linear-gradient(${degree}deg, ${gradient.join()} 100%);
      background-repeat: no-repeat;
      background-size: 100% ${weight}em;
      background-position: 0 ${100 - position}%;
      transition: background-size 0.25s ease-in;

      &:hover {
        background-size: 100% 88% !important;
      }
    `;

    const text = `
      .fancy-undeline {
        background-image: linear-gradient(${degree}deg, ${gradient.join()} 100%);
        background-repeat: no-repeat;
        background-size: 100% ${weight}em;
        background-position: 0 ${100 - position}%;
        transition: background-size 0.25s ease-in;
      }

      .fancy-undeline:hover {
        background-size: 100% 88% !important;
      }
    `;

    return { mixin, text };
  };

  render() {
    const { gradient, position, weight } = this.state;
    const baseColor = gradient[0];
    const displayText = this.getDisplayText();
    const { mixin, text } = this.getCSS();

    return (
      <App
        cssCode={mixin}
        cssToCopied={text}
        baseColor={baseColor}
        displayText={displayText}
        gradient={gradient}
        position={position}
        weight={weight}
        handleChange={this.handleChange}
      />
    );
  }
}

export default AppContainer;
