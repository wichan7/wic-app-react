import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { doLogin } from '../../utils/auth';
import './auth.css';

/* Main */
function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ( event ) => {
    if (event.target.name === "userId") {
      setUserId(event.target.value);
    } else if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  }
  const handleSubmit = ( event ) => {
    event.preventDefault();
    doLogin({userId, password})
    .then( (data) => alert(data.resultMessage) )
    .catch( (err) => {console.log(err)} )
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-login">
        <span className="title">로그인</span>
        <input type="text" name="userId" placeholder="ID"
          value={userId} onChange={handleChange}/>
        <input type="password" name="password" placeholder="password"
          value={password} onChange={handleChange}/>
        <input type="submit" className="submit" value="로그인"/>
        <div className="multi-buttons">
          <Link to="/chpw">비밀번호 찾기</Link>
          <Link to="/register">회원 가입</Link>
        </div>
      </form>
    </>
  );
}

export default Login;