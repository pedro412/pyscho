import React from 'react';
import { Navbar, Nav, LogoContainer, NavbarNav, NavLink } from './NavbarStyled';

const NavbarComponent = () => {
  return (
    <Navbar>
      <Nav>
        <LogoContainer>
          <span>VITAL</span>
          <span>MIND</span>
          <p>PSICÓLOGOS</p>
        </LogoContainer>
        <div>
          <NavbarNav>
            <li>
              <NavLink>¿Por qué VM?</NavLink>
            </li>
            <li>
              <NavLink>Cómo funciona</NavLink>
            </li>
            <li>
              <NavLink>Contacto</NavLink>
            </li>
            <li>
              <NavLink>Precios y planes</NavLink>
            </li>
          </NavbarNav>
        </div>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
