import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StyledLoader from '../components/UI/StyledLoader';
import PArtSection from '../components/PArt/PArtSection';
import { getInfoArt } from '@utils/api/getInfoArt';
import { IPageParams } from '@models/interfaces/IPageParams';
import { TZod } from '@models/types/zod';

const PArt = () => {
  const [info, setInfo] = useState<TZod>();
  const [loaded, setLoaded] = useState<boolean>(false);
  const params: IPageParams = useParams();
  useEffect(() => {
    takeInfo();
  }, []);

  const takeInfo = async () => {
    if (params.id)
      getInfoArt(params.id).then(data => {
        setInfo(data);
        setLoaded(true);
      });
  };

  return <main>{loaded ? <PArtSection info={info} /> : <StyledLoader />}</main>;
};

export default PArt;
