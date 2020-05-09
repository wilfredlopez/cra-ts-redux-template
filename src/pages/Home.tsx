import React from "react"
import { Counter } from "components"

interface Props {}

const Home = (props: Props) => {
  return (
    <div className="text-center">
      <h1>Counter</h1>
      <Counter />
    </div>
  )
}

export default Home
