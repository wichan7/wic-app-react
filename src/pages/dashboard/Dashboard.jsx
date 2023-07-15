import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {

  return (
    <>
      <div className="dashboard-root">
        <div className="title">
          <span>챗봇명: TEST</span>
        </div>
        <div className="dialog-editor">
          <ul className="option-nav">
            <li>
              option1
            </li>
            <li>
              option2
            </li>
            <li>
              option3
            </li>
          </ul>
          <div className="dialog">
            <div className="panel">panel</div>
            <div className="list">list</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;