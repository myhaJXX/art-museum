import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { StyledContainerD } from '../UI/StyledContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IHeaderLink } from '../../models/IHeaderLink';

const HeaderLink:FC<IHeaderLink> = ({href, icon, color, title}) => {
  return (
    <Link to={href}>
        <StyledContainerD $aligni='center' $gap='10px'>
            {icon && <FontAwesomeIcon icon={icon} color={color}/>}
            <h4>{title}</h4>
        </StyledContainerD>
    </Link>
  )
}

export default HeaderLink