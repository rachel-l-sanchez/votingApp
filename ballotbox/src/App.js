import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Voted from './components/Voted';
import CandidateForm from './components/CandidateForm';
import Register from './components/Register';
import CandidateList from './components/CandidateList';
import Login from './components/Login';
import Navbar from './components/Navbar';


import Admin from './components/Admin';
import AdminLogin from './AdminLogin';
import AdminLogout from './AdminLogout';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Routes>
          <Route element={<Register/>} path="/api/register" default/>
          <Route element={<Login/>} path="/api/login"/>
          <Route element={<CandidateForm/>} path="/api/candidate" />
          <Route element={<CandidateList/>} path="/api/candidates" />
          <Route element={<Voted/>} path="/api/candidate/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
