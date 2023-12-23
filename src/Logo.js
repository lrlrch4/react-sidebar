import React from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';


const StyledLogo = styled(Link)` 
    margin-left: 1rem; 
    background-color: transparent
`
const StyledBrand = styled(Link)` 
    margin-left: 1rem;
    color: white;
    font: rudik;
    text-decoration: none;
`
const Logo = () => {
  // Importa tu logo o proporciona el código SVG, imagen, etc.
  return (
    <>

    <StyledBrand to='/'>
      Geo Bus Perú
    </StyledBrand>

    <StyledLogo to='/'>       

        <svg width="48" height="57" viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3926 51.465H24.3163H35.5378C35.5378 55.5466 36.3601 56 40.4717 56C45.0768 56 44.5834 52.4546 44.5834 50.6405C47.8727 49.7748 47.0503 35.7576 46.4336 27.5533C45.5317 15.5563 43.5555 5.86788 35.5378 4.87833C35.5378 -0.200927 33.8931 1.16789 24.3163 1.16789C12.3102 1.00298 12.3926 1.16789 12.3926 4.87833C6.84195 5.29061 2.3537 12.0931 1.7023 27.5533C1.08565 42.1889 -0.147849 50.6405 3.55254 50.6405C3.55254 55.5877 3.55254 56 7.86976 56C12.3926 56 12.3926 56 12.3926 51.465Z" fill="white"/>
        <path d="M24.3163 10H27M24.3163 51.465H12.3926C12.3926 56 12.3926 56 7.86976 56C3.55254 56 3.55254 55.5877 3.55254 50.6405C-0.147849 50.6405 1.08565 42.1889 1.7023 27.5533C2.3537 12.0931 6.84195 5.29061 12.3926 4.87833C12.3926 1.16789 12.3102 1.00298 24.3163 1.16789C33.8931 1.16789 35.5378 -0.200927 35.5378 4.87833C43.5555 5.86788 45.5317 15.5563 46.4336 27.5533C47.0503 35.7576 47.8727 49.7748 44.5834 50.6405C44.5834 52.4546 45.0768 56 40.4717 56C36.3601 56 35.5378 55.5466 35.5378 51.465H24.3163Z" stroke="white"/>
        <path d="M40.5001 18.5001C38.9001 8.10008 35.5 10.0001 24.5 10.0001C13 10.0001 8.83348 8.5 7.50005 18.5001C6.5 26 5.00001 28.5 14.0001 28.5H32.5C43.7 28.5 41.8847 27.5 40.5001 18.5001Z" fill="#505050" stroke="white"/>
        <circle cx="12.5" cy="40.5" r="5" fill="#505050" stroke="white"/>
        <circle cx="36.5" cy="40.5" r="5" fill="#505050" stroke="white"/>
        </svg>

    </StyledLogo>
    </>
  );
};

export default Logo;