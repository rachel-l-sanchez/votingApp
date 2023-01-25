import React, { useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from "react-router-dom";
import SideNav from './SideNav';

const Voted = () => {
  const [candidate, setCandidate] = useState({});
  const {id} = useParams();



  useEffect(() => {
    axios.get(`http://localhost:8000/api/candidate/${id}`)
    .then( (res) => {
      console.log(res.data);
  })
  .catch( (err) => console.log(err) );
}, []);
    

  return (
    <div>
      <SideNav/>
        <div> 
            <h1>{candidate.name}</h1> 
            <p>Info: {candidate.pastTermStartDate}</p>
            <p>Info: {candidate.pastTermEndDate}</p>
            <p>Info: {candidate.party}</p>
            <p>Info: {candidate.stance}</p>
            <p>Info: {candidate.experience}</p>
            <Link to={`/api/candidates`} className="btn border btn-info">Back to Candidates</Link>
        </div> 
    </div>
  )
}

export default Voted
