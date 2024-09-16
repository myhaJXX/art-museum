import React, { FC, useEffect, useState } from 'react';
import { StyledContainerD } from '@UI/StyledContainer';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IHeaderLink } from '@models/IHeaderLink';
import HeaderLogo from '../Logo/Logo';
import StyledLink from '@UI/StyledLink';
import { useStore } from '@utils/useStore';
import StyledBurgerBox from '@UI/StyledBurger/StyledBurgerBox';
import StyledBurger from '@UI/StyledBurger/StyledBurger';

const Header: FC = () => {
  const store = useStore();

  const AnotherLinks: IHeaderLink[] = [
    { title: 'Featured', href: '/featured', icon: faHeart, color: '#FF0000' },
    { title: 'Home', href: '/', color: '#000' },
  ];

  const [activeBurger, setActiveBurger] = useState<boolean>(false)

  useEffect(()=>{
    document.querySelector('body')?.setAttribute('style', `overflow: ${activeBurger ? 'hidden' : 'auto'}`)
  }, [activeBurger])


  return (
    <header style={{ borderColor: store.colorBg }}>
      <HeaderLogo />

      {window.innerWidth > 800 ?
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
        </StyledContainerD> :
        <StyledBurger active={activeBurger} setActive={setActiveBurger}/>
      }

      <StyledBurgerBox links={AnotherLinks} $active={activeBurger} setActive={setActiveBurger}/>
    </header>
  );
};

export default Header;
