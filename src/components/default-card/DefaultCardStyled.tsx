import styled from 'styled-components';

const DefaultCardStyled = styled.div`
  width: 25rem;
  height: 30rem;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 20px;
  border: none;
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  &:hover {
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.quaternary};
  }
`;
export default DefaultCardStyled;
