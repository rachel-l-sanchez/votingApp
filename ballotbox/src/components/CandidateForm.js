import React, { useState } from 'react'
import axios from 'axios';

const CandidateForm = ()=> {
    const [name, setName] = useState('');
    const [pastTermStartDate, setPastTermStartDate] = useState('1/1/1900');
    const [pastTermEndDate, setPastTermEndDate] = useState('1/1/1900');
    const [party, setParty] = useState('');
    const [stance, setStance] = useState('');
    const [experience, setExperience] = useState('');

    //Create an array to store errors from the API
    const [errors, setErrors] = useState({}); 

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/candidate', {
            name,
            pastTermStartDate,
            pastTermEndDate,
            party,
            experience,
            stance
        })
            .then((res)=>console.log(res.data)) // If successful, do something with the response. 
            .catch((err=>{
                setErrors(err.response.data.errors)
            })
    )}

    return (
        <div>
            <h1>New Candidate</h1>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name:</label>
                    <input type="text" onChange={e => setName(e.target.value)} />
                    {errors.name && <span>{errors.name.message}</span>}<br></br>
                </p>
                <p>
                    <label>Past Term Start Date</label>
                    <input type="date" onChange={e => setPastTermStartDate(e.target.value)} />
                    {errors.pastTermStartDate && <span>{errors.pastTermStartDate.message}</span>}<br></br>
                </p>
                <p>
                    <label>Past Term End Date</label>
                    <input type="date" onChange={e => setPastTermEndDate(e.target.value)} />
                    {errors.pastTermEndDate && <span>{errors.pastTermEndDate.message}</span>}<br></br>
                </p>
                <p>
                    <label>Party</label>
                    <input type="text" onChange={e => setParty(e.target.value)} />
                    {errors.party && <span>{errors.party.message}</span>}<br></br>
                </p>
                <p>
                    <label>Experience</label>
                    <input type="text" onChange={e => setExperience(e.target.value)} />
                    {errors.experience && <span>{errors.experience.message}</span>}<br></br>
                </p>
                <p>
                    <label>Stance</label>
                    <input type="text" onChange={e => setStance(e.target.value)} />
                    {errors.stance && <span>{errors.stance.message}</span>}<br></br>
                </p>
                <button>Add Candidate</button>
            </form>
        </div>
    )
}
export default CandidateForm;

