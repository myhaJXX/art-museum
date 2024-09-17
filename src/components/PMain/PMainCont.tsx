import { FC, useState, useEffect } from 'react';
import { StyledContainerS } from '@UI/StyledContainer';
import PMainBox from './PMainBox';
import StyledLoader from '@UI/StyledLoader';
import PMainButtonsCont from './PMainButtonsCont';
import StyledInputBox from '@UI/StyledInputBox';
import StyledSorting from '@UI/StyledSorting/StyledSorting';
import getArts from '@utils/api/getArts';
import { useStore } from '@utils/useStore';
import { TZod } from '@models/types/zod';

const PMainCont: FC = () => {
  const Context = useStore();

  const [arts, setArts] = useState<TZod[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pages, setPages] = useState<number>(0);

  useEffect(() => {
    getStartArts();
  }, [Context.PageState.active]);

  const getStartArts = async (): Promise<void> => {
    setLoading(true);
    await getArts(Context.PageState.active).then(data => {
      const result: TZod[] = data.data;
      if (Array.isArray(result)) {
        setArts([...result]);
        setLoading(false);
        setPages(data.pages);
      }
    });
  };

  const [sorting, setSorting] = useState(0);

  return (
    <StyledContainerS $display="grid" $gap="10px">
      <h3 style={{ textAlign: 'center' }}>
        I THINK YOU
        <span style={{ color: Context.colorAdd }}> SHOULD </span>
        TAKE A LOOK
      </h3>

      <StyledInputBox />
      <StyledSorting sorting={sorting} setSorting={setSorting} />

      {loading ? <StyledLoader /> : <PMainBox data={arts} sorting={sorting} />}
      {loading || <PMainButtonsCont pages={pages} />}
    </StyledContainerS>
  );
};

export default PMainCont;
