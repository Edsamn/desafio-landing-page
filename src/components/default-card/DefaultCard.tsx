import DefaultCardStyled from './DefaultCardStyled';

interface DefaultCardProps {
  children: React.ReactNode;
}

function DefaultCard({ children }: DefaultCardProps) {
  return <DefaultCardStyled>{children}</DefaultCardStyled>;
}

export default DefaultCard;
