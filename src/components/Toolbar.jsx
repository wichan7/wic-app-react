import React, { useContext } from "react";

import logo from '../logo.svg';
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