import axios from 'axios';
import { TZod, ZodScheme } from '../models/zod';

type TResult = {pages: number; data: TZod[]}
const getArts = async (page: number): Promise<TResult> => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks?page=${page}&limit=20`
  );
  if (response.status !== 200) {
    throw new Error('Failed');
  } else {
    const pages = response.data.pagination.total_pages;
    let data = response.data.data;
    let result = data.map((e: any) => ZodScheme.parse(e));
    return {pages, data:result};
  }
};

export default getArts;
