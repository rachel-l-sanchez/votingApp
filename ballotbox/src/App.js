import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import EditCandidate from './components/EditCandidate';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Register from './components/Register';
import ViewCandidate from './components/ViewCandidate';
import VoterDashboard from './components/VoterDashboard';
import { useState } from 'react';
import AdminLogReg from './components/AdminLogReg';
import Footer from './components/Footer';

function App() {
  const [admin, setAdmin] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AdminLogReg />} path="/adminSignIn" />
          <Route element={<Login  setAdmin={setAdmin} />} path="/login" />
          <Route element={<Register setAdmin={setAdmin}/>} path="/register" />
          <Route element={<AdminDashboard />} path="/admin" />
          <Route element={<VoterDashboard />} path="/voterdashboard" />
          <Route element={<EditCandidate />} path="/edit/:id" />
          <Route element={<ViewCandidate />} path="/view/:id" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
