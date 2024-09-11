import axios from "axios";
import { TZodFiltered, ZodSchemeFiltered } from "../models/zodFilterd";
type TResult = {pages: number; data: TZodFiltered[]}
export const getFilteredArts = async (page: number, str:string):Promise<TResult> =>{
    const response = await axios.get(
        `https://api.artic.edu/api/v1/artworks/search?q=${str}&limit=20&page=${page}`
    )
    console.log(str)
    if(response.status !== 200) {
        throw new Error('Failed')
    } else {
        let data = response.data.data
        console.log(data)
        let pages = response.data.pagination.total_pages
        let resultT = data.map((e:any)=>ZodSchemeFiltered.parse(e))
        return {pages, data: resultT}
    }
}