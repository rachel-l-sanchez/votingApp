import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import '../main.css';

// Includes race count

const VoterDashboard = () => {

  const bgDiv={
    backgroundColor: "#ebeddf",
    minHeight: "70vh"
  }

  const secondDivBg={
    minHeight: "60vh"
  }

  const imgStyle={
    height: "6em",
    width: "6em",
    backgroundColor: "grey"
  }

  const [candidateList, setCandidateList] = useState([]);
  // const [counter, setCounter] = useState(0);
  // const {submitted, setSubmitted} = useState(false)
  // const {id} = useParams();
  // const [errors,setErrors] = useState({})
  // const navigate = useNavigate();

  useEffect (() => {
      axios.get('http://localhost:8000/api/candidates', {withCredentials:true, credentials:'include'})
          .then((res) => {
            console.log(res.data)
              setCandidateList(res.data)
          }).catch(err => {
              console.log(err)
          })
  }, []);

  const viewCandidate = () =>{
    axios.get('http://localhost:8000/api/candidates', {withCredentials:true, credentials:'include'})
          .then((res) => {
            console.log(res.data)
              setCandidateList(res.data)
          }).catch(err => {
              console.log(err)
          })
  }

  // /api/candidate/:id



  return (
    <div style={bgDiv} className="p-5">
      <div className="flex-row flex p-1 justify-around flex-wrap rounded" style={secondDivBg}>
        {
          candidateList.map(candidate => (
            <div className="m-3 p-10 flex flex-col items-center w-56 transparentDiv rounded max-h-72">
              <div className="mb-2" style={imgStyle}></div>
              <p className="text-xl text-center overflow-hidden truncate w-40">{candidate.name}</p>
              <p className="text-center overflow-hidden truncate w-40">{candidate.voteCount} Votes</p>
              <NavLink to="/">View</NavLink>
              <p>Vote</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default VoterDashboard