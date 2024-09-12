import React, { useContext } from 'react';
import Store from '../../store/store';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
  const colorAdd = useContext(Store)?.colorAdd;
  const nav = useNavigate()
  return (
      <h4 style={{ fontWeight: 600 }} onClick={()=>nav('/')}>
        <span style={{ color: colorAdd }}>Art</span> Museum
      </h4>
  );
};

export default Logo;
