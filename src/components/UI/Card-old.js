import React from 'react';
import styled from 'styled-components';

import { 
  lightGrey,
  dark,
} from '../../utils/theme';
import {rgba, tint} from 'polished';

const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 10px 20px ${props => rgba("#aaa", 0.7)};

  padding: 2em;
  margin: 1em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  max-width: calc(25% - 2*4em);
  min-width: calc(25% - 2*4em);
  width: calc(25% - 2*4em);

  @media ( max-width: 800px ) {
    max-width: calc(100% - 2*3em);
    min-width: calc(100% - 2*3em);
    width: calc(100 % - 2*3em);
    }
`;

const Header4 = styled.h4`
  color: ${dark} !important;
  margin: auto auto 1em 0;
  text-align: left;
`;

const Paragraph = styled.p`
  color: ${tint(0.5, lightGrey)} !important;
  margin: auto auto 2em 0;
  text-align: left;
`;

const Card = ({
  children,
  row,
  title,
}) => {
  
  return (
    <Wrapper>
      <Header4>{title}</Header4>
      {children}
    </Wrapper>
  );
};


export default Card;
