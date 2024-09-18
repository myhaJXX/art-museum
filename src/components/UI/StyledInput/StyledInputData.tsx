import { FC } from "react"
import StyledSearchCard from "@UI/StyledSearchCard"
import { TZodFiltered } from "@models/types/zodFilterd"

interface IProps {
    data:TZodFiltered[]
}

const StyledInputData:FC<IProps> = ({data}) => {
  return (
    <div>
        {data.map((e) => (
            <StyledSearchCard id={e.id} title={e.title} key={e.id} />
        ))}
  </div>
  )
}

export default StyledInputData