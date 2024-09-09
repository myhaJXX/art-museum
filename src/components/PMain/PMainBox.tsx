import React, { FC } from 'react';
import { StyledContainerD } from '../UI/StyledContainer';
import { TZod } from '../../models/zod';
import Card from '../Card/CardBig';

type Props = {
  data: TZod[];
};

const PMainBox: FC<Props> = ({ data }) => {
  return (
    <StyledContainerD
      $display="grid"
      $gridc="repeat(auto-fill, 300px)"
      $justifyc="space-between"
      $gap="30px"
    >
      {data.map((e: TZod) => (
        <Card key={e.id} {...e} />
      ))}
    </StyledContainerD>
  );
};

export default PMainBox;
