import React, { FC, useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { getFilteredArts } from '../../utils/getFilteredArts'
import { TZodFiltered } from '../../models/zodFilterd'
import StyledSearchCard from './StyledSearchCard'
import { useStore } from '../../utils/useStore'

interface CSSInputProps {
  $color: string,
  $active: boolean
}

const InputCss = styled.input`
  padding-left: 10px;
  height: 50px;
  width: 400px;
  border: 0px;
  border-right: 2px solid #CCC;
  border-left: 2px solid #CCC;
  outline: none;
  cursor: text;
`

const InputCssBox = styled.div<CSSInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  >div{
    top: 50px;
    position: absolute;
    max-height: 500px;
    width: 400px;
    display: ${({$active}) => $active ? 'block' : 'none'};
    background-color: #fff;
    z-index: 3;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      width: 2px;
    }

    &::-webkit-scrollbar-thumb{
      background-color: ${({$color}) => $color};
    }
  }
`

const StyledInputBox:FC = () => {

  const Context = useStore()

  const [searchData, setSearchData] = useState<TZodFiltered[]>([])

  const [search, setSearch] = useState<string>('')
  const timeOutRef = useRef<null | NodeJS.Timeout>()
  const changeSearch = (str: string):void=>{
    if(timeOutRef.current) clearTimeout(timeOutRef.current)
    timeOutRef.current = setTimeout(()=>{
      setSearch(str)
    }, 1000)
  }

  useEffect(()=>{
    changeArts()
  }, [search])

  const [active, setActive] = useState<boolean>(false)

  const changeArts = async () =>{
    await getFilteredArts(Context.PageState.active, search)
    .then(data=>setSearchData(search ? [...data.data] : []))
  }

  const unBlur = ():void => {
    setTimeout(()=>setActive(false), 250)
  }

  return (
    <InputCssBox $color={Context.colorAdd} $active={active}>
      <InputCss placeholder='Enter a article' 
      onChange={(e)=>changeSearch(e.target.value)} 
      onFocus={()=>setActive(true)} onBlur={()=>unBlur()}
    />
      <div>
        {searchData.map((e,i)=><StyledSearchCard id={e.id} title={e.title} key={i}/>)}
      </div>
    </InputCssBox>
  )
}

export default StyledInputBox