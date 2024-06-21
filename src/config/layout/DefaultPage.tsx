import Footer from '../../components/footer/Footer';
import NavBar from '../../components/nav-bar/NavBar';
import DefaultPageStyled from './DefaultPageStyled';

interface DefaultPageProps {
  children: React.ReactNode;
}

function DefaultPage({ children }: DefaultPageProps) {
  return (
    <>
      <NavBar></NavBar>
      <DefaultPageStyled>{children}</DefaultPageStyled>
      <Footer></Footer>
    </>
  );
}

export default DefaultPage;
