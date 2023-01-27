import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react'

const Login = () => {
    const {email, setEmail} = useState('')
    const {password, setPassword} = useState('')

    const navigate = useNavigate();

    const submitHandler =(e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
        email,
        password
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
            <label>Email:</label>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Password:</label>
            <input type="text" onChange={(e)=>setPassword(e.target.value)}></input>
            <button>Submit</button>        
        </form>
    </div>
  )
}

export default Login;