import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';

interface ICSSBurger {
  $active: boolean;
}

const CSSBurger = styled.div<ICSSBurger>`
  height: 50px;
  width: 50px;
  position: relative;
  z-index: 5;
  > div {
    height: 4px;
    width: 50px;
    position: absolute;
    background-color: #000;
    transition: all 0.2s linear;
  }

  > div:nth-child(1) {
    top: ${({ $active }) => ($active ? '23' : '10')}px;
    transform: rotate(${({ $active }) => ($active ? '45' : '0')}deg);
  }

  > div:nth-child(2) {
    top: calc(50% - 2px);
    opacity: ${({ $active }) => ($active ? '0' : '100')}%;
  }

  > div:nth-child(3) {
    bottom: ${({ $active }) => ($active ? '23' : '10')}px;
    transform: rotate(${({ $active }) => ($active ? '-45' : '0')}deg);
  }
`;

interface IProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const StyledBurger: FC<IProps> = ({ active, setActive }) => {
  return (
    <CSSBurger $active={active} onClick={() => setActive(!active)}>
      <div />
      <div />
      <div />
    </CSSBurger>
  );
};

export default StyledBurger;
