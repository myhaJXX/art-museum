import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

const Card = styled.article`
    padding: 10px;
    height: 200px;
    width: 49%;
    min-width: 420px;
    display: flex;
    gap: 10px;
    box-shadow: 0px 0px 12px 1px #CCC;
    overflow: hidden;

    >img{
        height: 100%;
    }

    >div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 4;  
    }

    svg{
        padding: 10px;
        border: 2px solid #FF0000;
        border-radius: 50%;
        transition: all .2s linear;

        &:hover{
            color: #000;
            border-color: transparent;
            transform: scale(1.1);
        }
    }

    @media(max-width: 1200px){
        width: 100%;
    }

    @media(max-width: 800px){
        p{
            display: none;
        }
    }
`

const StyledCardLittle:FC<PropsWithChildren<unknown>> = ({children}) => {
  return (
    <Card>{children}</Card>
  )
}

export default StyledCardLittle