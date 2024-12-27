import {Link} from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border-radius: 0px 0px 10px 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
`;

export const Nav = styled.nav`
  width: 100%;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 730px) {
    display: none;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffa07a;
  font-size: 25px;
  font-weight: 600;
  padding: 25px 8px;
`;

export const Button = styled.button`
  background: #ffa07a;
  color: #fff;
  border-radius: 8px;
  padding: 6px 20px;
  border: none;
`;

export const Burguer = styled.div`
  height: 20px;
  width: 50px;
  position: relative;
  @media (min-width: 730px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: block;
  width: 50px;
  height: 4px;
  background-color: #ffa07a;
  border-radius: 5px;
  position: absolute;
  transition: all 0.5s ease-in-out;
`;

export const MobileNavItem = styled.div`
  left: 0;
  position: absolute;
  top: 70px;
  width: 100%;
  background: rgba(0, 0, 0, 0.60);
  height: 100vh;
`;

export const MobileList = styled.ul`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
`;

export const MobileNavLink = styled(Link)`
  text-decoration: none;
  color: #ffa07a;
  font-size: 25px;
  font-weight: 600;
`;


