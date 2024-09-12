import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useStore } from '../../utils/useStore';

const Logo = () => {
  const colorAdd:string = useStore().colorAdd
  const nav:NavigateFunction = useNavigate()
  return (
      <h4 style={{ fontWeight: 600 }} onClick={()=>nav('/')}>
        <span style={{ color: colorAdd }}>Art</span> Museum
      </h4>
  );
};

export default Logo;
