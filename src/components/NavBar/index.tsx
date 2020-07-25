import React, { useEffect, useState } from 'react';

import {
    Container,
    NavbarContainer,
    TitleContainer,
    Title,
    Options,
    Store,
    MenuContainer,
    Menu,
    MenuTitle,
    OptionsMenu
} from './style';

const NavBar: React.FC = () => {
  const [scrollActive,setScrollActive] = useState(false);
  useEffect(()=>{
      window.addEventListener('scroll', () => {
          if(window.scrollY >= 50) {
              setScrollActive(true);
          } else {
            setScrollActive(false);
          }
      })
  }, []);
  return (
        <Container>
            <NavbarContainer>
                <TitleContainer>
                    <Title />
                </TitleContainer>
                <Options>
                    <li> <a href="#">Mac</a> </li>
                    <li> <a href="#">iPad</a> </li>
                    <li> <a href="#" className="active">iPhone</a> </li>
                    <li> <a href="#">Watch</a> </li>
                    <li> <a href="#">TV</a> </li>
                    <li> <a href="#">Music</a> </li>
                    <li> <a href="#">Suporte</a> </li>
                    <li> <a href="#"> <Store /> </a></li>
                </Options>
            </NavbarContainer>
            <MenuContainer active={scrollActive}>
                <Menu active={scrollActive}>
                    <MenuTitle>
                        <h2>iPhone SE</h2>
                    </MenuTitle>
                    <OptionsMenu>
                        <li>
                            <a href="#">Visão geral</a>
                        </li>
                        <li>
                            <a href="#">Por que trocar</a>
                        </li>
                        <li>
                            <a href="#">Especificações</a>
                        </li>
                        <li>
                            <button>Comprar</button>
                        </li>
                    </OptionsMenu>
                </Menu>
            </MenuContainer>
        </Container>
  )
}

export default NavBar;