import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <Toolbar />
      <div 
        className="login-form">
        <span className="title">로그인</span>
        <input id="userId" type="text" placeholder="ID"/>
        <input id="password" type="password" placeholder="password"/>
        <div id="submit" type="submit" className="submit">제출</div>
      </div>

    </div>
  );
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

function login() {
  
}

export default App;