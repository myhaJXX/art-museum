import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledLinkCss = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover{
        
    }
`

interface Iprops {
    title: string,
    icon?: IconProp,
    iconColor?: string;
    link: string,
}

const StyledLink:FC<Iprops> = ({title, icon, link, iconColor}) => {
    const nav = useNavigate()
  return (
    <StyledLinkCss onClick={()=>nav(`${link}`)}>
        {icon && <FontAwesomeIcon icon={icon} color={iconColor}/>}
        <h4>{title}</h4>
    </StyledLinkCss>
  )
}

export default StyledLink