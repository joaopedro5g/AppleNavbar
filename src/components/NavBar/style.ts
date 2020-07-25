import styled from 'styled-components';
import { FaApple, FaShoppingCart } from 'react-icons/fa';

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  position:relative;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background: rgb(30,30,30);
`;

export const TitleContainer = styled.div`
  width: 40px;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  margin-left: 15px;
  float:left;
`;

export const Title = styled(FaApple)`
  margin-bottom: 6px;
  width: 25px;
  height: 25px;
  color: rgb(163,170,174);
  transition: .4s;
  cursor:pointer;
  :hover {
    color: rgb(249,246,239);
    transition: .4s;
  }
`;

export const Options = styled.ul`
  height: 100%;
  width: 90%;
  display:flex;
  float:right;
  justify-content:center;
  align-items:center;
  li {
    margin: 0 50px;
    list-style:none;
    a {
      color:rgb(163,170,174);
      text-decoration:none;
      transition: .4s;
      :hover {
        color:#F9F6EF;
        transition: .4s;
      }
      &.active {
        color:rgb(163,170,174);
      }
    }
  }
`;

export const Store = styled(FaShoppingCart)`
  color:#F9F6EF;
  width: 25px;
  height: 25px;
  margin-top: 5px;
  margin-right: 10px;
`;

export const MenuContainer = styled<any>('div')`
  width: 100%;
  height: 70px;
  padding: ${props => props.active ? '0px' : '10px'};
  background: ${props => props.active ? 'rgba(100,100,100,.2)' : 'rgba(0,0,0,.2)'};
  position: ${props => props.active ? 'fixed' : 'relative'};
  top: 0;
  transition: .4s;
`;

export const Menu = styled<any>('div')`
  width: 100%;
  height: ${props => props.active ? '100%' : '120%'}; ;
  border-bottom: .5px solid rgb(163,170,174);
  padding: 20px 0;
`;

export const MenuTitle = styled.div`
  height: 100%;
  color: #F9F6EF;
  float:left;
  display:flex;
  align-items:center;
  margin-left: 15px;
`;

export const OptionsMenu = styled.ul`
  height: 100%;
  float:right;
  display:flex;
  justify-content:center;
  align-items:center;
  padding-right: 20px;
  li {
    margin: 0 10px;
    list-style:none;
    a {
      text-decoration: none;
      color:#fff;
      :hover {
        color:#0071e3;
      }
    }
    button {
      min-width: 40px;
      min-height: 20px;
      border-radius: 10px;
      background: #0071e3;
      border:none;
      padding: 10px;
      color:#fff;
      cursor:pointer;
    }
  }
`;