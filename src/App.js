/* Use react functions */
import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
/* Components */
import Toolbar from './components/Toolbar';
/* Routes */
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
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
      navigate("/login");
    }
  } );

  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register /> } />
        <Route path="/*" element={<NotFound /> } />
      </Routes>
    </>
  )
}

export default App;