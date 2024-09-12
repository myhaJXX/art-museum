import React, { FC, useContext, useEffect } from 'react'
import { StyledContainerS } from '../UI/StyledContainer'
import { TZod } from '../../models/zod'
import { missingText } from '../../utils/MissingText'
import Store from '../../store/store'

interface IProps {
    info: TZod | undefined
}

const PArtSection:FC<IProps> = ({info}) => {
    useEffect(()=>{
        let ele = document.querySelector(`#SingleArt${info?.id}`)
        if(ele) ele.innerHTML = `
            <p style="font-weight: 500;">Description:</p>
            ${missingText(info!.description, 'Description')}
        `
    }, [])
    const color = useContext(Store)?.colorMain
  return (
    <StyledContainerS $justifyc='center' $gap='20px' $display='grid' $justifyi='center'>
        <h2 style={{filter: 'drop-shadow(0px 0px 2px #ab68d8)'}}>{missingText(info!.title, 'title')}</h2>
        <img style={{width: '300px', boxShadow: '0px 0px 12px 2px #CCC'}} 
        src={`https://www.artic.edu/iiif/2/${info?.image_id}/full/843,/0/default.jpg`} alt="" 
        />
        <h4>
            Created by <span style={{color: color}}>{missingText(info!.artist_title, 'Name')}</span> in {missingText(info!.place_of_origin, 'Place')} 
            &nbsp;({missingText(info!.date_start!.toString(), 'Start')} - {missingText(info!.date_end!.toString(), 'Start')})
        </h4>
        <div style={{}} id={`SingleArt${info?.id}`}/>
    </StyledContainerS>
  )
}

export default PArtSection