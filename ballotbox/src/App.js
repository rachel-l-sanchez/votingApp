import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Voted from './components/Voted';
import CandidateForm from './components/CandidateForm';
import VoterRegister from './components/VoterRegister';
import CandidateList from './components/CandidateList';
import VoterLogin from './components/VoterLogin';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import AdminLogin from './components/AdminLogin';
import AdminLogout from './components/AdminLogout';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Routes>
          <Route element={<VoterRegister/>} path="/api/register" default/>
          <Route element={<VoterLogin/>} path="/api/login"/>
          <Route element={<CandidateForm/>} path="/api/candidate" />
          <Route element={<CandidateList/>} path="/api/candidates" />
          <Route element={<Voted/>} path="/api/candidate/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
