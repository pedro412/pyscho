import React from 'react'
import { Navbar, Nav, LogoContainer, NavbarNav, NavLink } from './NavbarStyled'

const NavbarComponent = () => {
  return (
    <Navbar>
      <Nav>
        <LogoContainer>
          <h1>Vital Mind</h1>
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
  )
}

export default NavbarComponent
