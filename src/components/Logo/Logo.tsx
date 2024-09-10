import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import Store from '../../store/store';
import { StyledContainerD } from '../UI/StyledContainer';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const colorAdd = useContext(Store)?.colorAdd;
  const nav = useNavigate()
  return (
    <StyledContainerD $aligni="center" $gap="10px" onClick={()=>nav('/')}>
      <FontAwesomeIcon icon={faLandmark} size="2x" />
      <h4 style={{ fontWeight: 600 }}>
        <span style={{ color: colorAdd }}>Art</span> Museum
      </h4>
    </StyledContainerD>
  );
};

export default Logo;
