import React, { useState, useEffect, useNavigate} from 'react';
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

// copied from create form so please edit to make it a put request

const Admin = () => {
    const [name, setName] = useState('');
    const [pastTermStartDate, setPastTermStartDate] = useState('1/1/1900');
    const [pastTermEndDate, setPastTermEndDate] = useState('1/1/1900');
    const [party, setParty] = useState('');
    const [stance, setStance] = useState('');
    const [experience, setExperience] = useState('');
    const [ candidateList, setCandidateList ] = useState([]);
    const { id } = useParams();
    const [errors, setErrors] = useState({}); 
    const navigate = useNavigate();

    useEffect (() => {
        axios
            .get('http://localhost:8000/api/candidates')
            .then((result) => setCandidateList(result.data))
            .catch(err => console.log(err))
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/edit/candidate/${id}`,{
            name,
            pastTermStartDate,
            pastTermEndDate,
            party,
            experience,
            stance
        })
        .then((res)=> {
          console.log(res.data)
          navigate('/api/candidates')
        }).catch((err) => {
          console.log(err)
          setErrors(err.response.data.errors)

      })
    }

    const deleteHandler = (id) => {
        axios
            .delete(`http://localhost:8000/api/${id}`)
            .then((result) => console.log(result))
            .catch(err => console.log(err))
            window.location.reload();
    }
  return (
    <div>
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                    {errors.name && <span>{errors.name.message}</span>}<br></br>
                </div>
                <div>
                    <label>Past Term Start Date</label>
                    <input type="date" onChange={e => setPastTermStartDate(e.target.value)} />
                    {errors.pastTermStartDate && <span>{errors.pastTermStartDate.message}</span>}<br></br>
                </div>
                <div>
                    <label>Past Term End Date</label>
                    <input type="date" onChange={e => setPastTermEndDate(e.target.value)} />
                    {errors.pastTermEndDate && <span>{errors.pastTermEndDate.message}</span>}<br></br>
                </div>
                <div>
                    <label>Party</label>
                    <input type="text" onChange={e => setParty(e.target.value)} />
                    {errors.party && <span>{errors.party.message}</span>}<br></br>
                </div>
                <div>
                    <label>Experience</label>
                    <input type="text" onChange={e => setExperience(e.target.value)} />
                    {errors.experience && <span>{errors.experience.message}</span>}<br></br>
                </div>
                <div>
                    <label>Stance</label>
                    <input type="text" onChange={e => setStance(e.target.value)} />
                    {errors.stance && <span>{errors.stance.message}</span>}<br></br>
                </div>
            </form>
        </div>
        <div>
            { 
                candidateList.map(candidate => (
                    <div>
                        <btn className="btn border btn-danger" onClick={()=>deleteHandler(candidate._id)}>Delete Candidate</btn>
                    </div>
                ))
            }
        </div>
    </div>
       
      )
}

export default Admin