import React from "react"
import { Switch, Link } from "react-router-dom"
import { Route } from "react-router"
import Home from "pages/Home"
import Bugs from "pages/Bugs"
interface Props {}

const AppRoutes = (props: Props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/bugs" exact component={Bugs}></Route>
        <Route path="/" component={PageNotFound} />
      </Switch>
    </>
  )
}

function PageNotFound() {
  return (
    <div>
      <p className="not-found-page">
        Upps... Page Not Found. <Link to="/">Go back Home</Link>
      </p>
    </div>
  )
}

export default AppRoutes
