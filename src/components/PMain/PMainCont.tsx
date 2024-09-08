import React, { FC, useContext, useState, useEffect } from 'react'
import {StyledContainerS} from '../UI/StyledContainer'
import getArts from '../../utils/getArts'
import { TZod } from '../../models/zod'
import Store from '../../store/store'
import PMainBox from './PMainBox'
import StyledLoader from '../UI/StyledLoader'
import PMainButtonsCont from './PMainButtonsCont'

const PMainCont:FC = () => {
  const Context = useContext(Store)
  if(!Context) throw new Error('failed')

  const [arts, setArts] = useState<TZod[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getStartArts()
  }, [Context.PageState.active])

  const getStartArts = async():Promise<void> =>{
    setLoading(true)
    await getArts(Context.PageState.active).then(data => {
      if(Array.isArray(data)) {
        setArts([...data])
        setLoading(false)
      }
    })
  }

  return (
    <StyledContainerS $display='grid' $gap='10px'>
      <h3 style={{textAlign: 'center'}}>
        I THINK YOU <span style={{color: Context.colorAdd}}>SHOULD</span> TAKE A LOOK
      </h3>

      {loading ? <StyledLoader/> : <PMainBox data={arts}/>}

      <PMainButtonsCont/>

    </StyledContainerS>
  )
}

export default PMainCont