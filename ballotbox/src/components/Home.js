import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Home = () => {
  return (

    <div>
        <h1>Welcome to the Ballot Box, your virtual polling center.</h1>
        <div>
            <h2>New here?</h2>
            <h2>Register as a Voter or Candidate</h2>
            <NavLink to="/register">Register</NavLink>
        </div>
        <div>
            <h2>Back again?</h2>
            <h2>Login & get back to it!</h2>
            <NavLink to="/login">Login</NavLink>
        </div>
        <div className="bg-green-200">
          <p className="text-4xl">Welcome to the Ballot Box, your virtual polling center.</p>
          <div className="bg-red-200">
              <p className="text-5xl">Race Info</p>
              <p className="text-3xl">Race Description</p>
              <p className="text-3xl">More info</p>
          </div>
          <div className="bg-sky-400">
            <p className="text-5xl">View Your Candidates</p>
            <NavLink to="/voterdashboard">Voter Dashboard</NavLink>
          </div>
        </div>
    </div>

  )
}

export default Home;