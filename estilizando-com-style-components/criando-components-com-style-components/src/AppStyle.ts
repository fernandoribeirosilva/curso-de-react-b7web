import styled from 'styled-components';

type ContainerProps = {
  bgColor: string;
}
export const Container = styled.div<ContainerProps>`
  background-color: ${props => props.bgColor};
  color: white;
  padding: 20px;
`;

type BotaoProps = {
  bg: string;
  small?: boolean;
  marginLeft?: string;
}
export const Botao = styled.button<BotaoProps>`
  font-size: ${props => props.small ? '20px' : '30px'};
  background-color: ${props => props.bg};
  border: none;
  border-radius: .4rem;
  margin-left: ${props => props.marginLeft};
`;