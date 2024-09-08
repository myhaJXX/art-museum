import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const calculateAl = (num:number, total:number):string => {
  const number = Math.floor(num*100) % total; 
  console.log(number)
  switch(number) {
    case 1: return 'flex-start';
    case 2: return 'center';
    case 3: return 'flex-end';
    default: return ''
  }
}

const Card = styled.article`
align-self: center;
padding: 10px;
height: fit-content;
width: 100%;
display: flex;
flex-direction: column;
gap: 10px;
justify-content: space-between;
box-shadow: 0px 0px 12px 1px #CCC;
border-radius: 5px;
position: relative;

&:hover >div{
  opacity: 1;
}

>img{
  max-height: 100%;
  max-width: 100%;
  width: auto;
  object-fit: contain;
}

>div{
  opacity: 0;
  bottom: 10px;
  width: calc(100% - 20px);
  display: flex; 
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  position: absolute;
  background-color: #fff;
  transition: all .4s linear;
}

svg{
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: all .2s linear;

  &:hover{
    transform: scale(1.1);
  }
}

path{ 
  cursor: pointer;
}

>svg{
  top: 15px;
  right: 15px;
  padding: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: #fff;

  &:hover{
    background-color: transparent;
    cursor: pointer;
  }
}
`

const StyledCardBig:FC<PropsWithChildren<unknown>> = ({children}) => {

  return (
    <Card>{children}</Card>
  )
}

export default StyledCardBig