import React from 'react'
import './LoginForm.css' ;
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper' >
        {/* <video src="/images/video-3.mp4" autoPlay loop muted /> */}
        <form action = "">
        
            <h1>Login</h1>
            <div className= "input-box">
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon'/>
            </div>

            <div className="remember-forget">
                <label><input type= "checkbox" />Remember Me</label>
                <a href ="/">Forgot password?</a>
            </div>

             <div className="btn-login">
                <button type="submit">Login</button></div>
            

            <div className="register-link">
                <p>Don't have an account? < a href = "/">Register</a></p>
            </div>
            
        </form>
      
    </div>
  )
}

export default LoginForm
