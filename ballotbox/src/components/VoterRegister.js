import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'

const VoterRegister = () => {
    const {name, setName} = useState('')
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')
    const {confirmPassword, setConfirmPassword} = useState('')

    const navigate = useNavigate();

    const submitHandler =(e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/register', {
        name,
        email,
        password,
        confirmPassword
        },{withCredentials: true, credentials: 'include'})
        .then((res)=>{
            console.log(res)
            navigate('/api/candidates')
        }).catch((err)=>{
            console.log(err)
        })
    
    }
  
    return (
    <div>
        <form onSubmit={submitHandler}>
            <label>Name:</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <label>Email:</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}></input>
            <label>Confirm Password:</label>
            <input type="text" onChange={(e)=>setConfirmPassword(e.target.value)}></input>
            <button>Submit</button>        
        </form>
    </div>
  )
}

export default VoterRegister;