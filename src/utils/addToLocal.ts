import { TZod } from "../models/zod";

export const addToLocal= (data:TZod) =>{
    let eles = localStorage.getItem('featured')
    let localNow:TZod[] = eles ? JSON.parse(eles) : []
    localNow.push(data)
    localStorage.setItem('featured', JSON.stringify(localNow))
}