import styled from 'styled-components';

type ContainerProps = {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  color: white;
  padding: 20px;

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
  }

  .username {
    color: #eee;
    font-size: 2rem;
  }

  button + button {
    margin-top: 10px;
  }
`;

type BotaoProps = {
  bg: string;
  small?: boolean;
}
export const Botao = styled.button<BotaoProps>`
  width: 200px;
  height: 30px;
  font-size: ${props => props.small ? '20px' : '30px'};
  background-color: ${props => props.bg};
  border: none;
  border-radius: .4rem;
`;