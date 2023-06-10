import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, modifyTitle] = useState('글제목1');
  let [like, modifyLike] = useState(0, 0);

  return (
    <div className="App">
      <div className="toolbar">
        <img src={logo} className="logo"/>
      </div>

      <div className="">
        <div>{title}</div>
        <div>😍{like}</div>
        <button onClick={ () => modifyLike(like + 1)}>좋아요</button>
      </div>
    
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <>
      <div style={ {"textAlign": "center"} }>
        바닥
      </div>
    </>
  )
}

export default App;