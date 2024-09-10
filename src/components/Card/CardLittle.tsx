import React, { FC, useContext, useEffect } from 'react'
import StyledCardLittle from '../UI/StyledCardLittle'
import { TZod } from '../../models/zod'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { StyledContainerD } from '../UI/StyledContainer'
import Store from '../../store/store'
import { missingText } from '../../utils/MissingText'

const CardLittle:FC<TZod> = (data) => {
    useEffect(()=>{
        const ele = document.querySelector(`#CardDescription${data.id}`)
        ele!.innerHTML = missingText(data.description, 'Description')
    }, [])

    const dispatch = useContext(Store)?.FeaturedDispatch
    if(!dispatch) throw new Error('sss')
  return (
    <StyledCardLittle>
        <img
            loading="lazy"
            src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
            alt=""
        />

        <div>
            <StyledContainerD $display='flex' $aligni='center' $justifyc='space-between' $gap='10px'>
                <h3>{missingText(data.title, 'Title')}</h3>
                <FontAwesomeIcon icon={faTrash} color='#FF0000' onClick={()=>dispatch({type: 'REMOVE_FEATURED', payload: data.id})}/>
            </StyledContainerD>
            <h4>Creator: {missingText(data.artist_title, 'Name')}</h4>
            <h4>Created in {missingText(data.place_of_origin, 'Place')} ({data.date_start} - {data.date_end})</h4>
            <p id={'CardDescription'+data.id}></p>
        </div>

    </StyledCardLittle>
  )
}

export default CardLittle