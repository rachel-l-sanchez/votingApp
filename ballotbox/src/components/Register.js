import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = ({setAdmin}) => {
  const [firstName, setFirstName]= useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('register form')
    const newUser = {firstName, lastName, email, password}
    console.log(newUser)

    axios.post('http://localhost:8000/api/admin/register', newUser,
    {withCredentials:true, credentials:'include'})
      .then (res => {
        console.log("logged in admin" + res.data.admin)
        setErrors([])
        setAdmin(res.data.admin)
        navigate('/admin')
      })
      .catch(res => setErrors(res.response.data.errors))
      
  }


  return (
    <div className="bg-div">
      <h1>Register New Admin</h1>
      <form onSubmit={()=>handleSubmit}>
                {/* first name */}
                {errors.firstName ? <span className="accent">{errors.firstName.message}</span> : null}
                <br/>
                <label>
                    First Name:
                    <input type='text' onChange={e=>setFirstName(e.target.value)}/>
                </label>
                {/* last name */}
                {errors.lastName ? <span className="accent">{errors.lastName.message}</span> :null}
                <br/>
                <label>
                    Last Name:
                    <input type='text' onChange={e=>setLastName(e.target.value)}/>
                </label>
                {/* email */}
                {errors.email ? <span className="accent">{errors.email.message}</span> : null}
                <br/>
                <label>
                    Email:
                    <input type='text' onChange={e=>setEmail(e.target.value)}/>
                </label>
                {/* password */}
                {errors.password ? <span className="accent">{errors.password.message}</span> :null}
                <br/>
                <label>
                    Password:
                    <input type='password' onChange={e=>setPassword(e.target.value)}/>
                </label>
                {/* confirm email */}
                {errors.confirmPassword ? <span className="accent">{errors.confirmPassword.message}</span> :null}
                <br/>
                <label>
                    Confirm Password:
                    <input type='password' onChange={e=>setConfirmPassword(e.target.value)}/>
                </label>
                <input type='submit' value='Submit'/>
      </form>


    </div>
  )
}

export default Register