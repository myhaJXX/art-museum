import React, { FC, useContext } from 'react';
import Store from '../../store/store';
import { StyledContainerD } from '../UI/StyledContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IHeaderLink } from '../../models/IHeaderLink';
import HeaderLogo from '../Logo/Logo';
import StyledLink from '../UI/StyledLink';

const Header: FC = () => {
  const colors = useContext(Store);
  if (!colors) throw new Error('failed');

  const AnotherLinks: IHeaderLink[] = [
    { title: 'Featured', href: '/featured', icon: faHeart, color: '#FF0000' },
    { title: 'Home', href: '/', color: '#000' },
  ];
  return (
    <header style={{ borderColor: colors.colorBg }}>
      <HeaderLogo />

      <StyledContainerD $aligni="center" $gap="20px">
        {AnotherLinks.map((e, i) => (
          <StyledLink title={e.title} link={e.href} iconColor={e.color} icon={e.icon} key={i}/>
        ))}
      </StyledContainerD>
    </header>
  );
};

export default Header;
