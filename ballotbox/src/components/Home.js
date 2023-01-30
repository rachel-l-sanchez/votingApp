import React from 'react'
import {Link,NavLink} from 'react-router-dom';
import background from '../assets/ballot_bg.png'

const Home = () => {

  const bgDivStyle ={
      minHeight: "70vh",
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat'
  }

  const textDivStyle ={
    background: 'rgb(204, 204, 204)', /* Fallback for older browsers without RGBA-support */
    background: 'rgba(204, 204, 204, 0.3)'
  }


  return (
    <div>
        <div className="bg-green-200 flex-col" style={bgDivStyle}>
          <p className="text-4xl p-5 justify-center flex flex-wrap">Welcome to the Ballot Box, your virtual polling center.</p>
          <div className="bg-red-200 p-5 flex-col mb-4 mx-24 rounded-xl" style={textDivStyle}>
              <p className="text-5xl flex justify-center pb-3">Presidential Election 2023</p>
              <p className="text-3xl flex justify-center">Three spunky billionaires pull out all the stops to win the coveted title of president of the USA.</p>
              <p className="text-3xl flex justify-center">Only one will make it out alive.</p>
          </div>
          <div className="flex-col p-5 mx-24 rounded-xl" style={textDivStyle}>
            <p className="text-5xl flex justify-center pb-3">View Your Candidates</p>
            <NavLink className="text-xl flex justify-center" to="/voterdashboard">Voter Dashboard</NavLink>
          </div>

        </div>
    </div>

  )
}

export default Home;