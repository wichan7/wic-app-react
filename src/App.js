/* Use react functions */
import React from 'react';
import { useRef, useState, useContext } from 'react';
/* Use Components */
import Toolbar from './components/Toolbar';
/* Use Contexts */
import { UserContext } from "./context/UserContext";
/* Use my utils */
import { doLogin } from './utils/auth';
/* Use resources (image, gif ...etc) */
import './App.css';

/* Main */
function App() {
  const { sessionId } = useContext(UserContext);
  console.log(sessionId)
  /* define states */
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  /* define handles */
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
    <div className="App">
      <Toolbar />
      <div>
        <form onSubmit={handleSubmit} className="form-login">
          <span className="title">로그인</span>
          <input type="text" name="userId" placeholder="ID"
            value={userId} onChange={handleChange}/>
          <input type="password" name="password" placeholder="password"
            value={password} onChange={handleChange}/>
          <input type="submit" className="submit" value="로그인"/>
          <div className="multi-buttons">
            <span>비밀번호 찾기</span>
            <span>비밀번호 잊기</span>
            <span>비밀번호 재설정</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;