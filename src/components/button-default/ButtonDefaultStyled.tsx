import styled from 'styled-components';

const ButtonDefaultStyled = styled.button`
  width: 140px;
  height: 60px;
  border: none;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.quaternary};
  font-size: 1rem;
  margin: 30px;
  transition: 0.5s;
  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
  }
`;

export default ButtonDefaultStyled;
