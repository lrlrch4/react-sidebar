import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from '../Logo';
import { Highlight } from './SubMenu';
import { useTheme } from './ThemeContext';


//Upper bar 
const Nav = styled.div`
  background: ${({ theme }) => (theme === 'dark' ? '#15171c' : 'white')};
  height: 10vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;  
`;

//Left lateral bar
const SidebarNav = styled.nav`
  background: ${({ theme }) => (theme === 'dark' ? '#15171c' : 'white')};
  width: 180px;
  height: 90vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 10vh;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

  overflow-y: auto;

  &::-webkit-scrollbar {
      width: 7px;
      background: #15171c; 
    
  }  
  &::-webkit-scrollbar-thumb {
    background-color: ${Highlight};
    
  }  
`;

const SidebarWrap = styled.div`
  width: 100%;
`;


const Sidebar = () => {
  const { theme } = useTheme();

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  const iconColor = theme === 'dark' ? '#fff' : '#15171c';

  return (
    <>
      <IconContext.Provider value={{ color: iconColor}}>
        
        <Nav theme = {theme}>          
            <NavIcon to='#' >
              <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>          
            <Logo/>              
        </Nav>

        
        <SidebarNav sidebar={sidebar} theme = {theme}>

            <SidebarWrap>

                {/* <NavIcon to='#'>
                  <AiIcons.AiOutlineClose onClick={showSidebar} />              
                </NavIcon> */}
        
                {SidebarData.map((item, index) => {
                  return <SubMenu item={item} key={index} />;
                })}             

            </SidebarWrap>

        </SidebarNav>


      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
