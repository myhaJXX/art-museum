import { TZod } from "@models/types/zod";

export const sortData = (data:TZod[], sorting: number):TZod[] => {

    switch (sorting) {
        case 0:
          return data.sort((a, b) => {
            const titleA: string = a.title?.toLowerCase() || '';
            const titleB: string = b.title?.toLowerCase() || '';
            return titleA.localeCompare(titleB);
          });
  
        case 1:
          return data.sort((a, b) => {
            const titleA: string = a.artist_title || '';
            const titleB: string = b.artist_title || '';
            return titleA.localeCompare(titleB);
          });
  
        case 2:
          return data.sort((a, b) => {
            const n1: number = a.date_start || 0;
            const n2: number = b.date_start || 0;
            return n1 - n2;
          });
        default:
          return data;
      }

}