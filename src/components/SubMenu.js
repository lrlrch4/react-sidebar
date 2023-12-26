import React, { useState } from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from './ThemeContext';


export const Highlight = '#8797ab'

//Side bar display
const SidebarLink = styled(Link)`
    display: flex; 
    color: ${({ theme }) => (theme === 'dark' ? 'white' : '#15171c' )};
    justify content: space-between;
    align-items: center; 
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 14 px;

    &:hover {
        background: ${({ theme }) => (theme === 'dark' ? '#252831' : '#e0e0e0' )};
        border-left: 6px solid ${Highlight} ;
        cursor: pointer;
    }

`

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

// Corredores by color display
const DropdownLink = styled(Link)`
    background: ${({ theme }) => (theme === 'dark' ? '#15171c' : 'white' )};
    height: 40px; 
    padding-left: 3rem;
    display: flex; 
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : '#15171c' )};
    font-size: 16px;

    &:hover {
        background: ${Highlight};
        cursor: pointer;

    }

`

const DropdownLink2 = styled(Link)`
    background: ${({ theme }) => (theme === 'dark' ? '#15171c' : 'white' )};
    height: 30px; 
    padding-left: 3rem;
    display: grid; 
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => (theme === 'dark' ? 'white' : '#15171c' )};
    font-size: 14px;
    grid-template-columns: 3fr 3fr;

    
    &:hover {
        background: ${Highlight};
        cursor: pointer;

    }

`

const SubMenu = ({ item }) => {
    const { theme } = useTheme();

    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav} theme = {theme}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
  
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        
  
        {subnav &&  item.subNav.map((subNavItem, index) => (
            <div key={index}>

              <DropdownLink to={subNavItem.path} theme = {theme}>
                {subNavItem.icon}
                <SidebarLabel>{subNavItem.title}</SidebarLabel>
              </DropdownLink>
  
              {subNavItem.subsubNav && subnav && subNavItem.subsubNav.map(
                (subsubNavItem, subIndex) => (
                    
                    <div key={subIndex}>
                    
                        <DropdownLink2 to={subsubNavItem.path} theme = {theme}> 
                            
                              {subsubNavItem.code} 
                                                      
                        </DropdownLink2>
                       
                    </div>
                   
                )
                )
              }

            </div>
          ))}
      </>
    );
  };
  
  export default SubMenu;