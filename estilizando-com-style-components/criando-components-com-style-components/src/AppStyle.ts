import styled from 'styled-components';
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  xs: "250px",
  sm: "450px",
  md: "768px",
  lg: "1200px"
});

type ContainerProps = {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  max-width: 600px;
  margin: 0 auto;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 20px;
  display: flex;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
  }

  .username {
    color: #eee;
    font-size: 2rem;
  }

  .link {
    color: #eee;
    margin: 0 10px;

    &:hover {
      color: #ff0000;
    }
  }

  button + button {
    margin-left: 10px;
  }

  ${customMedia.between("sm", 'md')`
    flex-direction: column;
    background-color: green;

    button {
      margin-top: 10px;
    }
  `}

  /* @media (max-width: 600px) {
    flex-direction: column;
    background-color: green;

    button {
      margin-top: 10px;
    }
  } */
`;

/* Button */
type BotaoProps = {
  bg: string;
  small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${props => props.small ? '20px' : '30px'};
  background-color: ${props => props.bg};
  border: none;
  border-radius: .4rem;
  padding: 5px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    background-color: #0000ff;
    color: #fff;
  }
`;