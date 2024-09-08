import axios from "axios"
import { TZod, ZodScheme } from "../models/zod"

const getArts = async(page:number):Promise<TZod> =>{
    const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${page}&limit=20`)
    if(response.status !== 200) {
        throw new Error('Failed')
    } else {
        let data = response.data.data
        let result = data.map((e:any) => ZodScheme.parse(e))
        return result
    }
}

export default getArts