import React from 'react';
import { useRef, useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";


const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[]);

  useEffect(()=>{
    setErrMsg('');
    
  },[user,pwd]);

  const handleSubmit = async (e)=>{
    e.preventDefault();

    setSuccess(true);

  }

  return (
    <>
    {success ? (
      <section>
        <h1>You are logged in!</h1>
        <br />
        <p><a href="#">Go to homepage</a></p>
      </section>

    ):(
      <section>
        <div className='wrapper'>
          <form action="" onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <FaUser/>
              <label htmlFor="username">Username</label>
            <input 
                type="text" 
                id='username' 
                placeholder='Enter your username' 
                ref={userRef}
                autoComplete='off'
                onChange={(e)=>setUser(e.target.value)}
                value={user}
                required
              />
            </div>
            <div className="input-box">
              <FaLock/>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id='password' 
                placeholder='Enter your password' 
                onChange={(e)=>setPwd(e.target.value)}
                value={pwd}
                required
              />
            </div>     
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password</a>
            </div>

            <button>Login</button>

            <div className="register-link">
              <p>Don't have an account? <a href="#">Register</a></p>
            </div>
          </form>
        </div>

      </section>
    )} </>
  )
}

export default LoginForm
