import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-dark">
        <h1 className="text-warning">The Ballot Box</h1>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/voterdashboard">Candidates</NavLink>
    </div>
  )
}

export default Navbar;