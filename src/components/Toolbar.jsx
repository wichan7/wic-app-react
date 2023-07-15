import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
/* Use resources (image, gif ...etc) */
import logo from '../logo.svg';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <>
      <div className="toolbar">
        <img src={logo} className="logo"/>
        <Link to="/auth/login" className="title">wic<b>Insight</b></Link>
      </div>
    </>
  )
}

export default Toolbar;