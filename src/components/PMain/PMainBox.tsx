import { FC, useMemo, useState, useEffect } from 'react';
import { StyledContainerD } from '@UI/StyledContainer';
import Card from '../Card/CardBig';
import { sortData } from '@utils/sortData';
import { TZod } from '@models/types/zod';

type Props = {
  data: TZod[];
  sorting: number;
};

const PMainBox: FC<Props> = ({ data, sorting }) => {
  const [totalFeatured, setTotalFeatured] = useState<number[]>([]);

  useMemo(() => {
    const eles: string | null = localStorage.getItem('featured');
    const local: TZod[] = eles ? JSON.parse(eles) : [];
    const localIds: number[] = local.map(e => e.id);
    setTotalFeatured([...localIds]);
  }, []);

  const [copy, setCopy] = useState<TZod[]>([]);

  useEffect(() => {
    const sorted: TZod[] = sortData(data, sorting);
    setCopy([...sorted]);
  }, [sorting, data]);

  return (
    <StyledContainerD
      $display="grid"
      $gridc="repeat(auto-fill, 300px)"
      $justifyc={'space-between'}
      $justifycA={'center'}
      $gap="30px"
    >
      {copy.map((e: TZod) => {
        return e.image_id ? (
          <Card key={e.id} {...e} featured={totalFeatured} />
        ) : (
          <></>
        );
      })}
    </StyledContainerD>
  );
};

export default PMainBox;
