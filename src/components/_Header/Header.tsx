import React, { FC } from 'react';
import { StyledContainerD } from '@UI/StyledContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IHeaderLink } from '@models/IHeaderLink';
import HeaderLogo from '../Logo/Logo';
import StyledLink from '@UI/StyledLink';
import { useStore } from '@utils/useStore';

const Header: FC = () => {
  const store = useStore();

  const AnotherLinks: IHeaderLink[] = [
    { title: 'Featured', href: '/featured', icon: faHeart, color: '#FF0000' },
    { title: 'Home', href: '/', color: '#000' },
  ];
  return (
    <header style={{ borderColor: store.colorBg }}>
      <HeaderLogo />

      <StyledContainerD $aligni="center" $gap="20px">
        {AnotherLinks.map((e, i) => (
          <StyledLink
            title={e.title}
            link={e.href}
            iconColor={e.color}
            icon={e.icon}
            key={i}
          />
        ))}
      </StyledContainerD>
    </header>
  );
};

export default Header;
