import { useStore } from "@utils/useStore"

const PMainTitle = () => {
    const Context = useStore()
  return (
    <h3 style={{ textAlign: 'center' }}>
    I THINK YOU
    <span style={{ color: Context.colorAdd }}> SHOULD </span>
    TAKE A LOOK
  </h3>
  )
}

export default PMainTitle