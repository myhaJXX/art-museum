import axios from 'axios';
import { TZodFiltered, ZodSchemeFiltered } from '@models/types/zodFilterd';
import { ArtApi } from '../../constants/artApi.constant';
type TResult = { pages: number; data: TZodFiltered[] };
export const getFilteredArts = async (
  page: number,
  str: string
): Promise<TResult> => {
  const response = await axios.get(
    `${ArtApi}/search?q=${str}&limit=20&page=${page}`
  );
  if (response.status !== 200) {
    throw new Error('Failed');
  } else {
    const data: any = response.data.data;
    const pages: number = response.data.pagination.total_pages;
    const resultT: TZodFiltered[] = data.map((e: any) =>
      ZodSchemeFiltered.parse(e)
    );
    return { pages, data: resultT };
  }
};
