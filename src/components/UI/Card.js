import styled from "styled-components";
import { radius, neutral } from "../../utils/theme";
import { rgba } from "polished";

const Card = styled.div`
  padding: 1rem;
  width: 100%;

  border-radius: ${radius};
  background-color: ${neutral[100]};
  background-color: white;
  box-shadow: 0px 10px 12px ${rgba(neutral[500], 0.1)};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  flex-grow: ${(props) => props.grow || 0};

  min-height: 30px;
  max-height: 30px;

  @media (min-width: 1px) and (max-width: 767px) {
    min-height: 120px;
    max-height: 120px;
    min-width: ${(props) => 2 * props.width}px;
    max-width: ${(props) => 2 * props.width}px;
    min-height: ${(props) => props.height}px;
    max-height: ${(props) => props.height}px;

    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  i {
    max-width: 30px;
    max-height: 30px;
  }
`;

export default Card;
