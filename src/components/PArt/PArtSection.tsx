import React, { FC } from 'react'
import { StyledContainerS } from '../UI/StyledContainer'
import { TZod } from '../../models/zod'
import { missingText } from '../../utils/MissingText'

interface IProps {
    info: TZod | undefined
}

const PArtSection:FC<IProps> = ({info}) => {
  return (
    <StyledContainerS>
        <img style={{width: '300px'}} src={`https://www.artic.edu/iiif/2/${info?.image_id}/full/843,/0/default.jpg`} alt="" />
        <div>
            <div>
                <h3>{missingText(info!.title, 'Title')}</h3>
                <h4>Created in {missingText(info!.place_of_origin, 'Place')} ({info?.date_start} - {info?.date_end})</h4>
                <h4 style={{fontWeight: '600'}}>By {missingText(info!.artist_title, 'Name')}</h4>
            </div>
            <div>
                <p>Description:</p>
                {missingText(info!.description, 'Description')}
            </div>
        </div>
    </StyledContainerS>
  )
}

export default PArtSection