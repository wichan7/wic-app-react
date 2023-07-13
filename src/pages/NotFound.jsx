import React from 'react';
import { Link } from 'react-router-dom';

/* Main */
function NotFound() {
  return (
    <>
      없는 페이지입니다.<br/>
      <Link to="/auth/login">메인으로</Link>
    </>
  );
}

export default NotFound;