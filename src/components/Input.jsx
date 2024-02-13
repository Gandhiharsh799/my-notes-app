import React from 'react'
import './Input.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';


export default function Input({text}) {
    const dispatch = useDispatch();
    const handleLogin = (event)=>{
        event.preventDefault();

        dispatch(authActions.login())
    }

  return (
    <>
      <div>
        <h2 style={{ textAlign: "center" }}>{text}</h2>
      </div>
      <form onSubmit={handleLogin}>
        <div className="wrapper">
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" name="password" required />
          </div>

          <div className="btn">
            <button>{text}</button>
          </div>
          <div>
            
          </div>
        </div>
      </form>
    </>
  );
}
