import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import styled from 'styled-components'
import StyledOption from './StyledOption'
import { TSorts, TSortsId } from '../../../models/TSorts'

interface ICSSSorting {
    $active: boolean;
}

const CSSSorting = styled.div<ICSSSorting>`
    right: 0;
    height: ${({$active}) => $active ? '200px' : '50px'};
    width: 300px;
    border-radius: 5px;
    display: grid;
    overflow: hidden;
    box-shadow: 0px 0px 12px 1px #CCC;
    position: absolute;
    z-index: 2;
    >*{
      display: flex;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
    }
`

interface IProps {
  sorting: number,
  setSorting: Dispatch<SetStateAction<number>>
}

const StyledSorting:FC<IProps> = ({sorting, setSorting}) => {
    const [active, setActive] = useState<boolean>(false)

  return (
    <div style={{position: 'relative', height: '50px'}}>
      <CSSSorting $active={active} onClick={()=>setActive(!active)}>
        <h4 style={{height: '50px'}}>Sort {TSortsId[sorting]}</h4>
        <StyledOption id={0} active={sorting === 0} setActive={setSorting} name={TSorts['By Name']}/>
        <StyledOption id={1} active={sorting === 1} setActive={setSorting} name={TSorts['By Creator Name']}/>
        <StyledOption id={2} active={sorting === 2} setActive={setSorting} name={TSorts['By Oldest Start']}/>
    </CSSSorting>
    </div>
  )
}

export default StyledSorting