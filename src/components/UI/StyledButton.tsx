import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { IButton } from '../../models/IButton';
import Store from '../../store/store';

const Button = styled.button<IButton>`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({$color}) => $color};
  border-radius: 50%;
  padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
  background-color: ${({ $bgCol }) => $bgCol};
  color: ${({ $color }) => $color};
  box-shadow: 0px 0px 12px 1px #ccc;
  transition: all 0.4s linear;
  cursor: pointer;
  display: ${({$display}) => $display ? 'block' : 'none'};

  &:hover {
    color: ${({ $bgCol }) => $bgCol};
    background-color: ${({ $color }) => $color};
    border-color: ${({ $bgCol}) => $bgCol};
  }
`;

const StyledButton = (props: IButton) => {
  const Context = useContext(Store);
  if (!Context) throw new Error('Failed');

  return (
    <Button
      $padding={[...props.$padding]}
      $active={props.$active}
      $id={props.$id}
      $color={props.$active ? '#fff' : '#000'}
      $bgCol={props.$active ? Context.colorMain : '#fff'}
      onClick={() => {
        Context.PageDispatch({ type: 'CHANGE_PAGE', payload: props.$id });
      }}
      $display={props.$display}
    >
      {props.$id}
    </Button>
  );
};

export default StyledButton;
