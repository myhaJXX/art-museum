import React, { FC, useContext } from 'react'
import Store from '../store/store'
import CardLittle from '../components/Card/CardLittle'
import { StyledContainerD } from '../components/UI/StyledContainer'

const PFeatured:FC = () => {
    const items = useContext(Store)?.FeaturedState.list
    if(!items) throw new Error('failed')
  return (
    <main style={{gap: '20px'}}>
        <h2>Featured</h2>
        <StyledContainerD $display='flex' $justifyc='space-between' $gap='20px' $wrap='wrap'>
            {items.map((e,i)=><CardLittle {...e} key={i}/>)}
        </StyledContainerD>
    </main>
  )
}

export default PFeatured