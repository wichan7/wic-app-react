import React, { useContext } from "react";

/* Use resources (image, gif ...etc) */
import logo from '../logo.svg';
import './Toolbar.css';

const Toolbar = () => {
  return (
    <>
      <div className="toolbar">
        <img src={logo} className="logo"/>
        <span className="title">wichan<b>Insight</b></span>
      </div>
    </>
  )
}

export default Toolbar;