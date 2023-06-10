import React from 'react';
import { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const userIdRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="App">
      <Toolbar />
      <div 
        className="login-form">
        <span className="title">로그인</span>
        <input ref={userIdRef} type="text" placeholder="ID"/>
        <input ref={passwordRef} type="password" placeholder="password"/>
        <div type="submit" className="submit" onClick={ goLogin }>제출</div>
      </div>
    </div>
  );

  function goLogin(event) {
    let userId = userIdRef.current.value;
    let password = passwordRef.current.value;
  
    console.log(userId, password);
  }
  
}

function Toolbar() {
  return (
    <>
      <div className="toolbar">
        <img src={logo} className="logo"/>
        <span className="title">wichan<b>Insight</b></span>
      </div>
    </>
  )
}

export default App;