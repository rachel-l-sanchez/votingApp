import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import '../navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='title'>
          <h1>The Ballot Box</h1>
        </div>
        <div className='links'>
          <button className="navButton"><NavLink to="/adminSignIn">LOGIN</NavLink></button><br/><br/>
          <button className="navButton"><NavLink to="/">HOME</NavLink></button><br/><br/>
          <button className="navButton"><NavLink to="/voterdashboard">CANDIDATES</NavLink></button>
        </div>
    </div>
  )
}

export default Navbar;