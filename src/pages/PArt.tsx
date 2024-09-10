import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPageParams } from '../models/IPageParams'
import { getInfoArt } from '../utils/getInfoArt'
import { TZod } from '../models/zod'
import StyledLoader from '../components/UI/StyledLoader'
import PArtSection from '../components/PArt/PArtSection'

const PArt = () => {
  const [info, setInfo] = useState<TZod>()
  const [loaded, setLoaded] = useState<boolean>(false)
  const params:IPageParams = useParams()
  useEffect(()=>{
    takeInfo()
  }, [])

  const takeInfo = async()=>{
    if(params.id) getInfoArt(params.id)
    .then((data)=>{
      setInfo(data)
      setLoaded(true)
    })
  }

  return (
    <main>
        {loaded ? <PArtSection info={info}/> : <StyledLoader/>}
    </main>
  )
}

export default PArt