import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { IButton } from '../../models/IButton';
import Store from '../../store/store';

const Button = styled.button<IButton>`
  padding: ${({ $padding }) => `${$padding[0]}px ${$padding[1]}px`};
  background-color: ${({ $bgCol }) => $bgCol};
  color: ${({ $color }) => $color};
  box-shadow: 0px 0px 12px 1px #ccc;
  transition: all 0.4s linear;
  cursor: pointer;

  &:hover {
    color: ${({ $bgCol }) => $bgCol};
    background-color: ${({ $color }) => $color};
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
    >
      {props.$id}
    </Button>
  );
};

export default StyledButton;
