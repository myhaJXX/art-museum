import React, { FC } from 'react';
import HeaderLogo from '../Logo/Logo';
import StyledLink from '@UI/StyledLink';
import { StyledContainerD } from '@UI/StyledContainer';
import { useStore } from '@utils/useStore';

const Footer: FC = () => {
  const color: string = useStore().colorBg;
  return (
    <footer style={{ borderColor: color }}>
      <HeaderLogo />

      <StyledContainerD $gap="10px">
        <StyledLink link="/featured" title="featured" />
        <StyledLink link="/terms" title="Terms of service" />
        <StyledLink link="/privacy" title="Privacy policy" />
      </StyledContainerD>
    </footer>
  );
};

export default Footer;
