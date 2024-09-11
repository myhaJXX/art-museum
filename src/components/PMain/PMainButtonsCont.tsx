import React, { FC, useContext, useEffect, useMemo, useState } from 'react';
import StyledButton from '../UI/StyledButton';
import Store from '../../store/store';
import { StyledContainerD } from '../UI/StyledContainer';

interface IProps {
  pages: number
}

const PMainButtonsCont:FC<IProps>= ({pages}) => {
  const [activeButton, setActiveButton] = useState<number>(1);
  const [max, setMax] = useState<number>(3);

  const Context = useContext(Store);
  if (!Context) throw new Error('Failed');

  useEffect(() => {
    setActiveButton(Context.PageState.active);
  }, [Context.PageState.active]);

  useMemo(()=>{
    setMax(activeButton+1 > 3 ? activeButton : 3)
  }, [activeButton])

  const checkActive = (id: number) => {
    return activeButton == id;
  };

  const checkHas = (id: number, totalPages: number) =>{
    return id<totalPages
  }

  return (
    <StyledContainerD $gap="10px">
      <StyledButton
        $id={max - 2}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max - 2)}
        $display={checkHas(max-2, pages)}
        key={`s${max-2}`}
      />
      <StyledButton
        $id={max - 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max - 1)}
        $display={checkHas(max-2, pages)}
        key='s2'
      />
      <StyledButton
        $id={max}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max)}
        $display={checkHas(max-2, pages)}
        key='s3'
      />
      <StyledButton
        $id={max + 1}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 1)}
        $display={checkHas(max-2, pages)}
        key='s4'
      />
      <StyledButton
        $id={max + 2}
        $bgCol={Context.colorMain}
        $padding={[5, 5]}
        $active={checkActive(max + 2)}
        $display={checkHas(max-2, pages)}
        key='s5'
      />
    </StyledContainerD>
  );
};

export default PMainButtonsCont;
