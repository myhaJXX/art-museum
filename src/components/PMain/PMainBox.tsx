import React, { FC, useMemo, useState, useEffect } from 'react';
import { StyledContainerD } from '../UI/StyledContainer';
import { TZod } from '../../models/zod';
import Card from '../Card/CardBig';
import { checkLocalId } from '../../utils/checkLocalId';

type Props = {
  data: TZod[];
  sorting: number;
};

const PMainBox: FC<Props> = ({ data, sorting }) => {

  const [totalFeatured, setTotalFeatured] = useState<number[]>([])

  useMemo(()=>{
    let eles = localStorage.getItem('featured')
    let local:TZod[] = eles ? JSON.parse(eles) : []
    let localIds:number[] = local.map(e => e.id)
    setTotalFeatured([...localIds])
  }, [])

  const [copy, setCopy] = useState<TZod[]>([])

  useEffect(()=>{
    let sorted = addSort(data)
    setCopy([...sorted])
  }, [sorting, data])

  const addSort = (data: TZod[]):TZod[] => {
    switch(sorting) {

      case 0: return data.sort((a,b)=>{
        let titleA = a.title?.toLocaleLowerCase() || ''
        let titleB = b.title?.toLocaleLowerCase() || ''
        return titleA.localeCompare(titleB)
      })

      case 1: return data.sort((a,b)=>{
        let titleA = a.artist_title || ''
        let titleB = b.artist_title || ''
        return titleA.localeCompare(titleB)
      })

      case 2: return data.sort((a,b)=>{
        let n1 = a.date_start|| 0
        let n2 = b.date_start || 0
        return n1 - n2
      })
      default: return data
    }
  }

  return (
    <StyledContainerD
      $display="grid"
      $gridc="repeat(auto-fill, 300px)"
      $justifyc="space-between"
      $gap="30px"
    >
      {copy.map((e: TZod) => {
        return e.image_id ? <Card key={e.id} {...e}  featured={totalFeatured}/> : <></>
      })}
    </StyledContainerD>
  );
};

export default PMainBox;
