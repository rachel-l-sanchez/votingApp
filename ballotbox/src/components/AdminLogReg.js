import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminLogReg = () => {
  return (
    <div>
          <button className="navButton"><NavLink to="/login">ADMIN LOGIN</NavLink></button><br/>
          <button className="navButton"><NavLink to="/register">ADMIN REGISTER</NavLink></button>
    </div>
  )
}

export default AdminLogReg