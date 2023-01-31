import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios'
import '../main.css';

// Includes race count

const VoterDashboard = () => {

  const secondDivBg={
    minHeight: "60vh"
  }

  const imgStyle={
    height: "6em",
    width: "6em",
    backgroundColor: "grey"
  }

  const [candidateList, setCandidateList] = useState([]);
  const [counter, setCounter] = useState(0);
  // const {submitted, setSubmitted} = useState(false)
  const {id} = useParams();
  const [errors,setErrors] = useState({})
  // const navigate = useNavigate();
  

  useEffect (() => {
      axios.get('http://localhost:8000/api/candidates')
          .then((res) => {
            console.log(res.data)
              setCandidateList(res.data)
          }).catch(err => {
              console.log(err)
          })
  }, []);

  const voteHandler = (id, votes) =>{
    let newVoteCount = votes + 1;
      axios.put(`http://localhost:8000/api/vote/${id}`,{ "voteCount": newVoteCount })
      .then((res)=> {
        console.log(res.data)
        window.location.reload()
      }).catch((err) => {
        console.log(err)
        setErrors(err.response.data.errors)
    })
  }

  // /api/candidate/:id



  return (
    <div className="p-5 bg-div">
      <div className="flex-row flex p-1 justify-around flex-wrap rounded" style={secondDivBg}>
        {
          candidateList.map(candidate => (
            <div className="m-3 p-10 flex flex-col items-center w-48 transparentDiv rounded max-h-72">
              <div className="mb-2" style={imgStyle}></div>
              <p className="text-xl text-center overflow-hidden truncate w-40">{candidate.name}</p>
              <p className="text-center overflow-hidden truncate w-40">{candidate.voteCount} Votes</p>
              <div className="flex flex-row mt-1">
                <Link to={`/view/${candidate._id}`}><button className="view-dash-button me-2">View</button></Link>
                <button className="view-dash-button" onClick={(e)=>voteHandler(candidate._id, candidate.voteCount)}>Vote</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VoterDashboard