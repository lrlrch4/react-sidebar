import React from 'react';
import * as RiIcons from 'react-icons/ri';

// import { MdEmojiTransportation } from "react-icons/md"
import { GiBusStop } from "react-icons/gi";
import { FaBus } from "react-icons/fa";
import { GiDonkey } from "react-icons/gi";


export const SidebarData = [
  // {
  //   title: 'Rutas',
  //   path: '/rutas',
  //   icon: <MdEmojiTransportation  />,    
  // },


  {
    title: 'Corredores',
    path: '/corredores',
    icon: <FaBus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Amarillo',
        path: '/corredores/amarillo',
        icon: <FaBus style = {{color: 'yellow'}}/>,
        cName: 'sub-nav',
        subsubNav: [
          {
            code: '101',
            path: '/corredores/amarillo/101',
            cName: 'subsub-nav'
          },
          {
            code: '107',
            path: '/corredores/amarillo/107',
            cName: 'subsub-nav'
          }
        ]
        
      },
      {
        title: 'Azul',
        path: '/corredores/azul',
        icon: <FaBus style = {{color: '0283FA'}}/>,
        cName: 'sub-nav',
        subsubNav: [
          {
            code: '301',
            path: '/corredores/azul/301',
            cName: 'subsub-nav'
          },
          {
            code: '303',
            path: '/corredores/azul/303',
            cName: 'subsub-nav'
          },
          {
            code: '305',
            path: '/corredores/azul/305',
            cName: 'subsub-nav'
          },
          {
            code: '336',
            path: '/corredores/azul/336',
            cName: 'subsub-nav'
          },
          {
            code: '370',
            path: '/corredores/azul/370',
            cName: 'subsub-nav'
          },
          {
            code: '371',
            path: '/corredores/azul/371',
            cName: 'subsub-nav'
          }         
        ]
      },
      {
        title: 'Morado',
        path: '/corredores/morado',
        icon: <FaBus style = {{color: 'purple'}}/>,
        cName: 'sub-nav',
        subsubNav: [
          {
            code: '404',
            path: '/corredores/morado/404',
            cName: 'subsub-nav'
          },
          {
            code: '405',
            path: '/corredores/morado/405',
            cName: 'subsub-nav'
          },
          {
            code: '406',
            path: '/corredores/morado/406',
            cName: 'subsub-nav'
          },
          {
            code: '409',
            path: '/corredores/morado/409',
            cName: 'subsub-nav'
          },
          {
            code: '412',
            path: '/corredores/morado/412',
            cName: 'subsub-nav'
          }                   
        ]
      },
      {
        title: 'Rojo',
        path: '/corredores/rojo',
        icon: <FaBus style = {{color: 'red'}}/>,
        cName: 'sub-nav',
        subsubNav: [
          {
            code: '201',
            path: '/corredores/rojo/201',
            cName: 'subsub-nav'
          },
          {
            code: '204',
            path: '/corredores/rojo/204',
            cName: 'subsub-nav'
          },
          {
            code: '206',
            path: '/corredores/rojo/206',
            cName: 'subsub-nav'
          },
          {
            code: '209',
            path: '/corredores/rojo/209',
            cName: 'subsub-nav'
          }       
        ]
      }
    ]
  },
  {
    title: 'Burra',
    path: '/burra',
    icon: <GiDonkey />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    

    subNav: [
      {
        title: 'Este',
        path: '/burra/este',
        icon: <GiDonkey />
      },
      {
        title: 'Oeste',
        path: '/burra/oeste',
        icon: <GiDonkey />
      }
    ]
  },  
];
