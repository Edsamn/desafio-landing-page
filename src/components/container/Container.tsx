import ContainerStyled from './ContainerStyled';

interface ContainerProps {
  children: React.ReactNode;
  ordem: boolean;
  cor: boolean;
}

function Container({ children, ordem, cor }: ContainerProps) {
  return (
    <ContainerStyled ordem={ordem} cor={cor}>
      {children}
    </ContainerStyled>
  );
}

export default Container;
