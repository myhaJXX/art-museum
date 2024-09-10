import { TZod } from "../models/zod";
import axios from "axios";
import { ZodScheme } from "../models/zod";
export const getInfoArt = async (id:number):Promise<TZod> =>{
    const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/${id}`
    );
    if (response.status !== 200) {
        throw new Error('Failed');
      } else {
        let data = response.data.data;
        let result = ZodScheme.parse(data)
        return result;
    }
};