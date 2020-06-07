import styled from 'styled-components';

export const Navbar = styled.nav`
  height: 100px;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90%;
  margin: auto;
`;
export const LogoContainer = styled.div`
  color: #00c4cc;
`;

export const NavbarNav = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
`;
export const NavLink = styled.a`
  display: block;
  padding: 0.5rem 1rem;
  font-weight: bold;
`;
