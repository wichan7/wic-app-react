import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { sessionId } = useContext(UserContext);
  
  return (
    <></>
  )
}

export default Header;