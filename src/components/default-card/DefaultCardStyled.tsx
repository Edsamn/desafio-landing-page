import styled from 'styled-components';

const DefaultCardStyled = styled.div`
  height: 30rem;
  width: 25rem;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border-radius: 20px;
  border: none;
  padding: 10px;
  margin: 20px;
`;
export default DefaultCardStyled;
