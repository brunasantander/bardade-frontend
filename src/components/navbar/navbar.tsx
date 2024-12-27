import logo from '../../assets/images/logo.png';
import { MobileNavbar } from './mobile-navbar';
import { Image, List, ListItem, Nav, NavLink, Wrapper } from './navbar.styles';

export const Navbar = () => {
  return (
    <Wrapper>
      <Nav>
        <Image src={logo} alt="logo do bar" />
        <List>
          <ListItem>
            <NavLink to="/">Home</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/corpo-docente">Pedidos</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/contato">Mesa</NavLink>
          </ListItem>
        </List>
        <MobileNavbar />
      </Nav>
    </Wrapper>
  );
};