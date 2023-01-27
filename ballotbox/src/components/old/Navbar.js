import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-dark">
        <h1 className="text-warning">The Ballot Box</h1>
        <NavLink to="/edit/candidate/:id">Admin</NavLink>
        <NavLink to="/api/register">Register</NavLink>
        <NavLink to="/api/candidates">Candidates</NavLink>
    </div>
  )
}

export default Navbar;