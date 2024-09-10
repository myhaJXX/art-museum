import React, { FC, useContext } from 'react';
import HeaderLogo from '../Logo/Logo';
import Store from '../../store/store';

const Footer: FC = () => {
  const color = useContext(Store)?.colorBg
  return (
    <footer style={{borderColor: color}}>
      <HeaderLogo/>
    </footer>
  )
};

export default Footer;
