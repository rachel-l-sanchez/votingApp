import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import '../navbar.css'

const Navbar = () => {

  const logoStyle = {
    height: 'auto',
    width: '20em',
    cursor: 'pointer'
  }

  return (
    <div className="navbar">
        <div className='title'>
        <NavLink to="/"><img src={require('../assets/logo.png')} style={logoStyle} alt="logo"/></NavLink>
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