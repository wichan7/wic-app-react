import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { doLogin } from '../../utils/auth';
import './dashboard.css';

function Dashboard() {

  return (
    <>
      대시보드입니다.
    </>
  );
}

export default Dashboard;