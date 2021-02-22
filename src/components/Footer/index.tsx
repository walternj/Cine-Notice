import React from 'react';

import { Container, LinkedinIcon, GithubIcon, SiteIcon } from './styles';

const logoUrl = "https://fontmeme.com/permalink/210217/348a3cfe75f8cabeeb7061a4f136be21.png"

const Footer: React.FC = () => {

  return (
    <Container>
      <div className="footer--left-container">
        <p>Netflix Copyrights</p>
        <p>Powered by TMDB</p>
      </div>
      <img src={logoUrl} alt="Ciné-Notice"/>
      <div className="footer--right-container">
        <span>Mehdi</span>
        <a href="https://www.linkedin.com/in/mehdi-lafleur-36bb11174/"
        target="new" ><LinkedinIcon /></a>
        <a href="https://github.com/walternj" target="new"><GithubIcon /></a>
       <a href='#'><SiteIcon /></a>
      </div>
    </Container>
  );
};

export default Footer;
