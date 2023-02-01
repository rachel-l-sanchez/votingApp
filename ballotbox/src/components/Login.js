import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Login = ({setAdmin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/admin/login',{ 
      email, 
      password},
     { withCredentials: true, credentials:'include' })
        .then ( (res) => {
          console.log('admin', res.data);
          navigate("/admin");
        })
        .catch( (err) => {
          console.log(err);
        } )
}


  return (
    <div className="bg-div">
      <p className="text-3xl">Admin Login</p>
      <form onSubmit ={handleSubmit}>
        {/* email */}
        <label>
            Email:
            <input type='text' onChange={ (e) => setEmail(e.target.value) }/>
        </label>

        {/* password */}
        <label>
            Password:
            <input type='password' onChange={ (e) => setPassword(e.target.value) } />
        </label>

        <input type='submit' value='Submit'/>
      </form>

    </div>
  )
}

export default Login