import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'


export const Highlight = '#08088A'

const SidebarLink = styled(Link)`
    display: flex; 
    color: #e1e9fc;
    justify content: space-between;
    align-items: center; 
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 18 px;

    &:hover {
        background: #252831;
        border-left: 6px solid ${Highlight} ;
        cursor: pointer;
    }

`

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

// Estilos de menu desplegado
const DropdownLink = styled(Link)`
    background: #202227;
    height: 40px; 
    padding-left: 3rem;
    display: flex; 
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: ${Highlight};
        cursor: pointer;

    }

`

const DropdownLink2 = styled(Link)`
    background: #202227;
    height: 30px; 
    padding-left: 3rem;
    display: grid; 
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 14px;
    grid-template-columns: 3fr 3fr;

    
    &:hover {
        background: ${Highlight};
        cursor: pointer;

    }

`

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
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

              <DropdownLink to={subNavItem.path}>
                {subNavItem.icon}
                <SidebarLabel>{subNavItem.title}</SidebarLabel>
              </DropdownLink>
  
              {subNavItem.subsubNav && subnav && subNavItem.subsubNav.map(
                (subsubNavItem, subIndex) => (
                    
                    <div key={subIndex}>
                    
                        <DropdownLink2 to={subsubNavItem.path}> 
                            
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