import { TZod } from "../models/zod"

export const removeFromLocale = (id: number) => {
    let eles = localStorage.getItem('featured')
    let localNow:TZod[] = eles ? JSON.parse(eles) : []
    localNow = localNow.filter(e=>e.id !== id)
    localStorage.setItem('featured', JSON.stringify(localNow))
}