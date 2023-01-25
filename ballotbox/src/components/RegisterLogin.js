import React from 'react'
import VoterRegister from './VoterRegister';
import VoterLogin from './VoterLogin';
import Admin from './Admin';
import AdminLogin from './AdminLogin';

const RegisterLogin = () => {
  return (
    <div>
      <div>
        <VoterRegister/>
        <Admin/>
      </div>
      <div>
        <AdminLogin/>
        <VoterLogin/>
      </div>


    </div>
  )
}

export default RegisterLogin;