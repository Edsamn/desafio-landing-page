import styled from 'styled-components';

const ButtonDefaultStyled = styled.button`
  width: 140px;
  height: 60px;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 1rem;
`;

export default ButtonDefaultStyled;
