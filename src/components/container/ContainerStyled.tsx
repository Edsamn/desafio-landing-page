import styled from 'styled-components';

interface ContainerStyledProps {
  ordem: boolean;
  cor: boolean;
}

const ContainerStyled = styled.div<ContainerStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.ordem ? 'column' : 'row')};
  flex-wrap: wrap;
  background-color: ${props => (props.cor ? props => props.theme.colors.tertiary : props.theme.colors.secondary)};
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;

  p {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export default ContainerStyled;
