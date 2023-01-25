import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import './App.css'

const SideNav = () => {
  return (
    <div className="sideNav" style={{width: "25%", paddingTop: "20px" }}>
        <NavLink to="/api/candidate">Add Info</NavLink>
        <NavLink to="/api/vote/:id">Edit Info</NavLink>
        <NavLink to="/api/candidates">View Race</NavLink>
    </div>
  )
}

export default SideNav;