// NavBar do app, passando botão via propriedade da pagina Main

import React from 'react';
import { Container, TitleTop } from './styles.js';

const NavBar = (props) => {
  return (
      <>
        <Container>
            <TitleTop>Conectando Vidas</TitleTop>
        </Container>
      </>
  );
}

export default NavBar;