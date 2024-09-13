import { useContext } from "react"
import Store from "@store/store"

export const useStore = () =>{
    const Context = useContext(Store)
    if(!Context) throw new Error('Context is not fined')
    return Context
}