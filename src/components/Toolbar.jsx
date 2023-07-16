import React, { useRef, useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
/* Use resources (image, gif ...etc) */
import logo from '../logo.svg';
import './Toolbar.css';
/* utils */
import { clearAuth } from '../utils/auth';

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