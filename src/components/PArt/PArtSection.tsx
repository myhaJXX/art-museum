import React, { act, FC, useContext, useEffect, useState } from 'react'
import { StyledContainerD, StyledContainerS } from '../UI/StyledContainer'
import { TZod } from '../../models/zod'
import { missingText } from '../../utils/MissingText'
import Store from '../../store/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

interface IProps {
    info: TZod | undefined
}

const PArtSection:FC<IProps> = ({info}) => {
    const Context = useContext(Store)

    const [featured, setFeatured] = useState<boolean>(false)
    useEffect(()=>{
        let ele = document.querySelector(`#SingleArt${info?.id}`)
        if(ele) ele.innerHTML = `
            <p style="font-weight: 500;">Description:</p>
            ${missingText(info!.description, 'Description')}
        `

        let eles = localStorage.getItem('featured')
        let locale:TZod[] = eles ? JSON.parse(eles) : []
        let localIds:number[] = locale.map(e => e.id)
        setFeatured(localIds.includes(info!.id))
    }, [])

    const changeFeatured = (act: 'add' | 'remove') =>{
        if(!info) throw new Error('failed')
        if(act == 'add') Context?.FeaturedDispatch({type: 'ADD_FEATURED', payload: info})
        else Context?.FeaturedDispatch({type: 'REMOVE_FEATURED', payload: info.id}) 
    }

  return (
    <StyledContainerS $justifyc='center' $gap='20px' $display='grid' $justifyi='center'>
        <StyledContainerD $aligni='center' $gap='20px'>
            <h2 style={{filter: 'drop-shadow(0px 0px 1px #ab68d8)'}}>{missingText(info!.title, 'title')}</h2>
            <FontAwesomeIcon icon={featured ? solidHeart : regularHeart} color={featured ? '#FF0000' : '#000'} size='2x'
            onClick={()=>{
                changeFeatured(featured ? 'remove' : 'add')
                setFeatured(!featured)
            }}
            />
        </StyledContainerD>
        <img style={{width: '300px', boxShadow: '0px 0px 12px 2px #CCC'}} 
        src={`https://www.artic.edu/iiif/2/${info?.image_id}/full/843,/0/default.jpg`} alt="" 
        />
        <h4>
            Created by <span style={{color: Context?.colorAdd}}>{missingText(info!.artist_title, 'Name')}</span> in {missingText(info!.place_of_origin, 'Place')} 
            &nbsp;({missingText(info!.date_start!.toString(), 'Start')} - {missingText(info!.date_end!.toString(), 'Start')})
        </h4>
        <div style={{}} id={`SingleArt${info?.id}`}/>
    </StyledContainerS>
  )
}

export default PArtSection