import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
type MenuProps = {
  toggleMenu : boolean,
}

const Menu: React.FC<MenuProps> = ({toggleMenu}) => {

  return (
    <Container toggleMenu={toggleMenu}>
        <ul>
          <Link to="#"><li>Mon Profil</li></Link>
          <Link to="/Mylist"><li>Ma Liste</li></Link>
          <Link to="#"><li>Contacts</li></Link>
        </ul>
    </Container>
  );
}

export default Menu;
