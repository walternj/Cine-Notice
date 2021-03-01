import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
type MenuProps = {
  toggleMenu: boolean,
  handleToggleMenu: () => void
}

const Menu: React.FC<MenuProps> = ({toggleMenu, handleToggleMenu}) => {

  return (
    <Container toggleMenu={toggleMenu}>
        <ul>
          <Link to="/" onClick={handleToggleMenu}>
            <li>Home</li>
          </Link>
          <Link to="/profil" onClick={handleToggleMenu}>
            <li>Profil</li>
          </Link>
          <Link to="/mylist" onClick={handleToggleMenu}>
            <li>Ma Liste</li>
          </Link>
          <Link to="#" onClick={handleToggleMenu}>
            <li>Contacts</li>
          </Link>
          <Link to="/Login" onClick={handleToggleMenu}>
            <li>Login</li>
          </Link>
        </ul>
    </Container>
  );
}

export default Menu;
