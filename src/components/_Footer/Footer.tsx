import React, { FC, useContext } from 'react';
import HeaderLogo from '../Logo/Logo';
import Store from '../../store/store';
import StyledLink from '../UI/StyledLink';
import { StyledContainerD } from '../UI/StyledContainer';

const Footer: FC = () => {
  const color = useContext(Store)?.colorBg
  return (
    <footer style={{borderColor: color}}>
      <HeaderLogo/>

      <StyledContainerD $gap='20px'>
        <StyledLink link='/featured' title='featured'/>
        <StyledLink link='/terms' title='Terms of service'/>
        <StyledLink link='/privacy' title='Privacy policy'/>
      </StyledContainerD>

    </footer>
  )
};

export default Footer;
