import React from 'react'
import { LeftSide, RightSide } from './style'
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "rgb(27, 116, 94, 0.9)",
        padding: "20px 40px",
        position: "relative",
        top: 0,
        zIndex: "1000"
      }}>
      <div className="d-flex justify-content-between">
        <LeftSide>
          <h4><Link to='/'>Floral Studio</Link></h4>
        </LeftSide>
        <RightSide>
          <nav>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about-us'>About us</NavLink></li>
              <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
              <li><NavLink to='/pricing'>Pricing</NavLink></li>
              <li><NavLink to='/contacts'>Contacts</NavLink></li>
              <li><NavLink to='/add'>Add</NavLink></li>
            </ul>
          </nav>
        </RightSide>
      </div>
    </header>
  )
}

export default Header