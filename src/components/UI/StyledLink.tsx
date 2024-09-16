import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, FC, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledLinkCss = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  &::before {
    left: 0;
    bottom: 0;
    content: '';
    position: absolute;
    height: 3px;
    width: 0%;
    background-color: #000;
    transition: all 0.2s linear;
  }

  &:hover::before {
    width: 100%;
  }

  > * {
    cursor: pointer;
  }
`;

interface Iprops {
  title: string;
  icon?: IconProp;
  iconColor?: string;
  link: string;
  onClick?: Dispatch<SetStateAction<any>>,
  value?: any
}

const StyledLink: FC<Iprops> = ({ title, icon, link, iconColor, onClick, value }) => {
  const nav = useNavigate();
  return (
    <StyledLinkCss onClick={() => {
      nav(`${link}`)
      if(onClick) onClick(value)
    }}>
      {icon && <FontAwesomeIcon icon={icon} color={iconColor} />}
      <h4>{title}</h4>
    </StyledLinkCss>
  );
};

export default StyledLink;
