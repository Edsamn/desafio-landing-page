import ContainerStyled from './ContainerStyled';

interface ContainerProps {
  children: React.ReactNode;
  ordem: boolean;
}

function Container({ children, ordem }: ContainerProps) {
  return <ContainerStyled ordem={ordem}>{children}</ContainerStyled>;
}

export default Container;
