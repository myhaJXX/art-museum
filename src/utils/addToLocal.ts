import { TZod } from '@models/zod';

export const addToLocal = (data: TZod) => {
  const eles: string | null = localStorage.getItem('featured');
  const localNow: TZod[] = eles ? JSON.parse(eles) : [];
  localNow.push(data);
  localStorage.setItem('featured', JSON.stringify(localNow));
};
