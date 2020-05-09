import React from "react"
import "./header.model.css"
import { NavLink } from "react-router-dom"
interface Props {}

const Header = (props: Props) => {
  return (
    <header id="app-header-container" className="main-background main-color">
      <h1>CRA Redux Typescript Template</h1>
      <nav id="header-nav">
        <ul className="flex">
          <li className="px-1">
            <NavLink to="/" exact>
              Counter
            </NavLink>
          </li>
          <li className="px-1">
            <NavLink to="/bugs" exact>
              Bugs
            </NavLink>
          </li>
          <li>
            <NavLink to="/test" exact>
              404
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
