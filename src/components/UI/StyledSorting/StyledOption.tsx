import React, { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'
import { TSorts } from '@models/TSorts'

interface ICSSOption {
    $active: boolean;
}

const CSSOption = styled.option<ICSSOption>`
    height: 50px;
    width: 100%;
    border-bottom: 2px solid #CCC;
    background-color: ${({$active}) => $active ? '#e4e4e4' : '#FFF'};
    transition: all .2s linear;
     &:hover{
      transform: scale(1.01);
     }
`

interface IProps {
    name: TSorts,
    setActive: Dispatch<SetStateAction<number>>,
    active: boolean,
    id: number
}

const StyledOption:FC<IProps> = ({name, id, setActive, active}) => {
  return (
    <CSSOption onClick={()=>setActive(id)} $active={active}>
        {name}
    </CSSOption>
  )
}

export default StyledOption