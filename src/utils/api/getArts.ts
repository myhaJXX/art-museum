import axios from 'axios';
import { TZod, ZodScheme } from '@models/types/zod';
import { ArtApi } from '../../constants/artApi.constant';

type TResult = { pages: number; data: TZod[] };

const getArts = async (page: number): Promise<TResult> => {
  const response = await axios.get(
    `${ArtApi}?page=${page}&limit=20`
  );
  if (response.status !== 200) {
    throw new Error('Axios is failed');
  } else {
    const pages: number = response.data.pagination.total_pages;
    const data: any = response.data.data;
    const result: TZod[] = data.map((e: any) => ZodScheme.parse(e));
    return { pages, data: result };
  }
};

export default getArts;
