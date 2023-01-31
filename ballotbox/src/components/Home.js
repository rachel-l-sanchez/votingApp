import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import background from '../assets/ballot_bg.png';
import '../main.css'

const Home = () => {

  const bgDivStyle ={
      minHeight: "70vh",
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'repeat'
  }

  const navigate = useNavigate();

  return (
    <div>
        <div className="bg-green-200 flex-col text-center" style={bgDivStyle}>
          <p className="text-4xl p-5 justify-center flex flex-wrap">Welcome to the Ballot Box, your virtual polling center.</p>
          <div className="bg-red-200 p-5 flex flex-col mb-4 transparentDiv items-center text-center">
              <p className="text-5xl pb-3">Presidential Election 2023</p>
              <p className="text-3xl pb-3">Three spunky billionaires pull out all the stops to win the coveted title of president of the USA.</p>
              <p className="text-3xl">Only one will make it out alive.</p>
          </div>
          <div className="flex-col flex items-center p-5 transparentDiv">
            <p className="text-5xl pb-3">View Your Candidates</p>
            <button className="p-1 dash-button" onClick={()=>navigate('/voterdashboard')}>Voter Dashboard</button>
          </div>

        </div>
    </div>

  )
}

export default Home;