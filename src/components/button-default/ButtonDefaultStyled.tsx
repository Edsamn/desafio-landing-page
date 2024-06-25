import styled from 'styled-components';

const ButtonDefaultStyled = styled.button`
  width: 140px;
  height: 60px;
  border: none;
  background-color: ${props => props.theme.colors.quaternary};
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
  margin: 30px;
  transition: 0.5s;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.quaternary};
  }
`;

export default ButtonDefaultStyled;
