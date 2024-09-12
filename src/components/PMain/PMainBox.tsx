import React, { FC, useEffect, useMemo, useState } from 'react';
import { StyledContainerD } from '../UI/StyledContainer';
import { TZod } from '../../models/zod';
import Card from '../Card/CardBig';
import { checkLocalId } from '../../utils/checkLocalId';

type Props = {
  data: TZod[];
};

const PMainBox: FC<Props> = ({ data }) => {

  const [totalFeatured, setTotalFeatured] = useState<number[]>([])

  useMemo(()=>{
    let eles = localStorage.getItem('featured')
    let local:TZod[] = eles ? JSON.parse(eles) : []
    let localIds:number[] = local.map(e => e.id)
    setTotalFeatured([...localIds])
  }, [])
  return (
    <StyledContainerD
      $display="grid"
      $gridc="repeat(auto-fill, 300px)"
      $justifyc="space-between"
      $gap="30px"
    >
      {data.map((e: TZod) => {
        return e.image_id ? <Card key={e.id} {...e} featured={totalFeatured}/> : <></>
      })}
    </StyledContainerD>
  );
};

export default PMainBox;
