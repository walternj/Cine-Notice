import React, { Dispatch, SetStateAction } from 'react';
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
          <Link to="#" onClick={handleToggleMenu}>
            <li>Profil</li>
          </Link>
          <Link to="/Mylist" onClick={handleToggleMenu}>
            <li>Ma Liste</li>
          </Link>
          <Link to="#" onClick={handleToggleMenu}>
            <li>Contacts</li>
          </Link>
        </ul>
    </Container>
  );
}

export default Menu;
