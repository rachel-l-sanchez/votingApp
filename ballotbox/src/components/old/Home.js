import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Ballot Box, your virtual polling center.</h1>
        <div>
            <h2>New here?</h2>
            <h2>Register as a Voter or Candidate</h2>
            <NavLink to="/api/register">Register</NavLink>
        </div>
        <div>
            <h2>Back again?</h2>
            <h2>Login & get back to it!</h2>
            <NavLink to="/api/login">Login</NavLink>
        </div>
    </div>
  )
}

export default Home