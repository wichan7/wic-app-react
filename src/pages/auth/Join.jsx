import React, { useRef, useState, useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { doJoin } from '../../utils/auth';
import './auth.css';

function Join() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");
  const [authMethod, setAuthMethod] = useState("");
  const [authCode, setAuthCode] = useState("");
  const navigate = useNavigate();

  const handleChange = ( event ) => {
    if (event.target.name === "userId") {
      setUserId(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    } else if (event.target.name === "passwordRe") {
      setPasswordRe(event.target.value);
    } else if (event.target.name === "authMethod") {
      setAuthMethod(event.target.value);
    } else if (event.target.name === "authCode") {
      setAuthCode(event.target.value);
    }
  }
  const handleSubmit = ( event ) => {
    event.preventDefault();
    doJoin({userId, password})
    .then( (data) => {
      if (data.code === 201) {
        alert("회원가입에 성공했습니다.");
        navigate("/auth/login");
      } else {
        alert(data.code + " " + data.message);
      }
    } )
    .catch( (err) => {console.log(err)} )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* title */}
        <span className="title">회원 가입</span>

        {/* id */}
        <input type="text" name="userId" placeholder="ID"
          value={userId} onChange={handleChange}/>
        
        {/* passwords */}
        <input type="password" name="password" placeholder="비밀번호"
          value={password} onChange={handleChange}/>
        <input type="password" name="passwordRe" placeholder="비밀번호 확인"
          value={passwordRe} onChange={handleChange}/>
        
        {/* authorize */}
        <select name="authMethod" placeholder="인증 방식"
          value={authMethod} onChange={handleChange}>
            <option value="">인증 방식 선택</option>
            <option value="sms">sms</option>
            <option value="email">email</option>
        </select>
        <input type="text" name="authCode" placeholder="인증코드 입력"
          value={authCode} onChange={handleChange}/>

        {/* submit */}
        <input type="submit" className="submit" value="저장"/>

        {/* buttons */}
        <div className="multi-buttons">
          <Link to="/auth/login">로그인 하러가기</Link>
        </div>

      </form>
    </>
  );
}

export default Join;