import TextContainerStyled from './TextContainerStyled';

interface TextContainerProps {
  children: React.ReactNode;
}

function TextContainer({ children }: TextContainerProps) {
  return <TextContainerStyled>{children}</TextContainerStyled>;
}

export default TextContainer;
