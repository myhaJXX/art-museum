import { createContext } from "react"
import { IColors } from "./reducers/ColorsReducer"
import { IPages } from "./reducers/PagesReducer"
import { IActiveFeatured } from "./reducers/FeaturedReducer"

type TConnected = IPages & IColors & IActiveFeatured

const Store = createContext<TConnected | undefined> (undefined)

export default Store