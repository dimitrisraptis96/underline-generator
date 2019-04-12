import React from 'react';
import styled from 'styled-components';
import {rgba} from 'polished';

const ColorCircle = styled.div`
  width: 28px;
  height: 28px;

  margin: 7px;
  border-radius: 50px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;

  transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -webkit-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -moz-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;
  -o-transition: box-shadow 0.6s ease-out, transform 0.3s ease-out;

  ${ props => props.selected 
    ? (`
      border: 3px solid ${props.color};
      background-color: white;
    `)
    : (
      `background-color: ${props.color};`
    )
  };

  :hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 10px 20px ${props => rgba(props.color, 0.7)};

  }
`;

export default ColorCircle;