import React, { useContext, useEffect, useMemo, useState } from 'react';
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

  useMemo(()=>{
    setMax(activeButton+1 > 3 ? activeButton : 3)
  }, [Context.PageState.active])

  useEffect(()=>{
    console.log(max)
  } , [max])

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
        key={`s${max-2}`}
      />
      <StyledButton
        $id={max - 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max - 1)}
        key='s2'
      />
      <StyledButton
        $id={max}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max)}
        key='s3'
      />
      <StyledButton
        $id={max + 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 1)}
        key='s4'
      />
      <StyledButton
        $id={max + 2}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 2)}
        key='s5'
      />
    </StyledContainerD>
  );
};

export default PMainButtonsCont;
