import React, { FC } from 'react'
import CardLittle from '../components/Card/CardLittle'
import { StyledContainerD } from '../components/UI/StyledContainer'
import { useStore } from '@utils/useStore'

const PFeatured:FC = () => {
    const items = useStore().FeaturedState.list
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