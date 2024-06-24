import styled from 'styled-components';

const DividerStyled = styled.hr`
  height: 3px;
  background-color: ${props => props.theme.colors.primary};
`;

export default DividerStyled;
