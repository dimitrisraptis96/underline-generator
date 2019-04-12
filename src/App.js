import React from "react";
import styled from "styled-components";

import { Grommet } from "grommet";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

import { light } from "./utils/theme";
import grommetTheme from "./utils/grommetTheme";

const Wrapper = styled.div`
  padding: 2em 4em;
  background-color: ${light};

  min-height: calc(100vh - 2 * 2em);
  /* max-height: calc(100vh - 4em); */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  font-family: "Prata", serif;
`;

const App = (props) => {
  const { baseColor, gradient } = props;

  return (
    <Grommet theme={grommetTheme(baseColor)}>
      <Wrapper>
        <Header baseColor={baseColor} gradient={gradient} />
        <Body {...props} baseColor={baseColor} />
        <Footer baseColor={baseColor} />
      </Wrapper>
    </Grommet>
  );
};

export default App;
