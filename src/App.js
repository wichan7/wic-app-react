/* Use react functions */
import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
/* Components */
import Toolbar from './components/Toolbar';
/* Routes */
import Login from './pages/auth/Login';
import Join from './pages/auth/Join';
import Chpw from './pages/auth/Chpw';
import NotFound from './pages/NotFound';
/* context */
import { UserContext } from "./context/UserContext";
/* resources */
import './App.css';

function App() {
  const isLogin = true;
  const navigate = useNavigate();

  useEffect( () => {
    if (!isLogin) {
      navigate("/dashboard/login");
    }
  } );

  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/dashboard/" element={<Login />} />
        <Route path="/dashboard/login" element={<Login />} />
        <Route path="/dashboard/join" element={<Join /> } />
        <Route path="/dashboard/chpw" element={<Chpw /> } />
        <Route path="/dashboard/*" element={<NotFound /> } />
      </Routes>
    </>
  )
}

export default App;