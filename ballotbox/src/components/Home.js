import React from 'react'
import {Link,NavLink} from 'react-router-dom';

const Home = () => {
  return (
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
  )
}

export default Home