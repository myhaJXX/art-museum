import React, { useContext, useEffect, useState } from 'react';
import StyledButton from '../UI/StyledButton';
import Store from '../../store/store';
import { StyledContainerD } from '../UI/StyledContainer';

const PMainButtonsCont = () => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [max, setMax] = useState<number>(3);

  const Context = useContext(Store);
  if (!Context) throw new Error('Failed');

  useEffect(() => {
    setActiveButton(Context.PageState.active);
  }, [Context.PageState.active]);

  const checkActive = (id: number) => {
    return activeButton == id;
  };

  return (
    <StyledContainerD $gap="10px">
      <StyledButton
        $id={max - 2}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max - 2)}
      />
      <StyledButton
        $id={max - 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max - 1)}
      />
      <StyledButton
        $id={max}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max)}
      />
      <StyledButton
        $id={max + 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 1)}
      />
      <StyledButton
        $id={max + 2}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 2)}
      />
    </StyledContainerD>
  );
};

export default PMainButtonsCont;
