import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import EditCandidate from './components/EditCandidate';
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import RaceStats from './components/RaceStats';
import Register from './components/Register';
import ViewCandidate from './components/ViewCandidate';
import VoterDashboard from './components/VoterDashboard';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<AdminDashboard />} path="/admin" />
          <Route element={<VoterDashboard />} path="/voterdashboard" />
          <Route element={<EditCandidate />} path="/edit/:id" />
          <Route element={<ViewCandidate />} path="/view/:id" />
          <Route element={<RaceStats />} path="/racecount" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
