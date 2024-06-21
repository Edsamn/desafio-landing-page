import { Link } from 'react-router-dom';
import NavBarStyled from './NavBarStyled';
import navigation from '../../config/navigation';

function NavBar() {
  return (
    <NavBarStyled>
      <h2 style={{ color: '#fff' }}>Curso de Análise de Dados</h2>
      {navigation.map(item => (
        <div>
          <Link to={item.url}>{item.label}</Link>
        </div>
      ))}
    </NavBarStyled>
  );
}

export default NavBar;
