import React from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

export default function Header() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state =>state.auth.isAuthenticated)
  function handleClick(){
    dispatch(authActions.logout())
  }
 
  return (
      <header>
        <h1>My Notes</h1>
        {isAuth && <div>
          <button onClick={handleClick}>Logout</button>
        </div>}
      </header>
  );
}
