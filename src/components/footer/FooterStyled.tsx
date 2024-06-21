import styled from 'styled-components';

const FooterStyled = styled.footer`
  height: 10vh;
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.primary};
  width: 100%;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default FooterStyled;
