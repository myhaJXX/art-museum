import { TZod } from '@models/types/zod';
import axios from 'axios';
import { ZodScheme } from '@models/types/zod';
export const getInfoArt = async (id: number): Promise<TZod> => {
  const response = await axios.get(
    `https://api.artic.edu/api/v1/artworks/${id}`
  );
  if (response.status !== 200) {
    throw new Error('Axios is failed on page of art');
  } else {
    const data: any = response.data.data;
    const result: TZod = ZodScheme.parse(data);
    return result;
  }
};
