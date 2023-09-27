import "./navbar.css"
import React from "react"
import globe from "../static/globe.svg"

export function Navbar(){
  return(
    <div className="navbar">
      <img src={globe}></img>
      <div>
        My Travel Journal
      </div>
    </div>
  )
}