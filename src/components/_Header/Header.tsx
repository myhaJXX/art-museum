import { FC, useEffect, useState } from 'react';
import { StyledContainerD } from '@UI/StyledContainer';
import StyledBurgerBox from '@UI/StyledBurger/StyledBurgerBox';
import StyledBurger from '@UI/StyledBurger/StyledBurger';
import StyledLink from '@UI/StyledLink';
import HeaderLogo from '../Logo/Logo';
import { useStore } from '@utils/useStore';
import { IHeaderLink } from '@models/interfaces/IHeaderLink';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Header: FC = () => {
  const store = useStore();

  const AnotherLinks: IHeaderLink[] = [
    { title: 'Featured', href: '/featured', icon: faHeart, color: '#FF0000' },
    { title: 'Home', href: '/', color: '#000' },
  ];

  const [activeBurger, setActiveBurger] = useState<boolean>(false);

  useEffect(() => {
    document
      .querySelector('body')
      ?.setAttribute('style', `overflow: ${activeBurger ? 'hidden' : 'auto'}`);
  }, [activeBurger]);

  return (
    <header style={{ borderColor: store.colorBg }}>
      <HeaderLogo />

      {window.innerWidth > 800 ? (
        <StyledContainerD $aligni="center" $gap="20px">
          {AnotherLinks.map((e: IHeaderLink) => (
            <StyledLink
              title={e.title}
              link={e.href}
              iconColor={e.color}
              icon={e.icon}
              key={e.title}
            />
          ))}
        </StyledContainerD>
      ) : (
        <StyledBurger active={activeBurger} setActive={setActiveBurger} />
      )}

      <StyledBurgerBox
        links={AnotherLinks}
        $active={activeBurger}
        setActive={setActiveBurger}
      />
    </header>
  );
};

export default Header;
