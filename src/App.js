/* Use react functions */
import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
/* Components */
import Toolbar from './components/Toolbar';
/* Routes */
import Login from './pages/auth/Login';
import Join from './pages/auth/Join';
import Chpw from './pages/auth/Chpw';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/NotFound';
/* context */
import { UserContext } from "./context/UserContext";
/* resources */
import './App.css';
import { doVerify, doRefresh } from './utils/auth';

function App() {
  const isLogin = true;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect( () => {
    console.log(pathname);

    if (pathname.startsWith("/auth")) {
      return;
    }

    doRefresh("123")
    .then( (data) => {
      console.log(data)
    } )
    .catch( (err) => {
      console.log(err)
    } )

    if (!isLogin) {
      navigate("/auth/login");
    }
  } );

  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/join" element={<Join /> } />
        <Route path="/auth/chpw" element={<Chpw /> } />
        <Route path="/dashboard" element={<Dashboard /> } />
        <Route path="/*" element={<NotFound /> } />
      </Routes>
    </>
  )
}

export default App;