import styled from 'styled-components';

interface ContainerStyledProps {
  ordem: boolean;
}

const ContainerStyled = styled.div<ContainerStyledProps>`
  width: 100vw;
  display: flex;
  flex-direction: ${props => (props.ordem ? 'column' : 'row')};
  flex-wrap: wrap;
  background-color: ${props => props.theme.colors.secondary};
  justify-content: center;
  align-items: center;
`;

export default ContainerStyled;
