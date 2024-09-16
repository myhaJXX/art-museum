import { IHeaderLink } from '@models/IHeaderLink';
import StyledLink from '@UI/StyledLink';
import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

interface ICSSProps {
  $active: boolean;
}

const CSSBurgerBox = styled.div<ICSSProps>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: ${({$active}) => $active ? 'flex' : 'none'};
  align-items: flex-start;
  position: absolute;
  background-color: #00000080;
  z-index: 100;

  >div{
    padding: 20px;
    display: grid;
    gap: 10px;
    background-color: #fff;
  }
`;

interface IProps {
  $active: boolean;
  links: IHeaderLink[];
  setActive: Dispatch<SetStateAction<boolean>>;
}

const StyledBurgerBox: FC<IProps> = ({ $active, links, setActive }) => {
  return (
    <CSSBurgerBox $active={$active} onClick={()=>setActive(false)}>
      <div onClick={(e)=>e.stopPropagation()}>
        {links.map((e: IHeaderLink, i) => (
            <StyledLink
            onClick={setActive}
            value={false}
            title={e.title}
            link={e.href}
            iconColor={e.color}
            icon={e.icon}
            key={i}
            />
        ))}
      </div>
    </CSSBurgerBox>
  );
};

export default StyledBurgerBox;
