import React from 'react'
import './LoginSignup.css'
import { useNavigate } from 'react-router'

const LoginSignup = () => {
  const navigate = useNavigate()

  const onClick = ()=>{
    navigate("/sign-up")
  }

  return (
    <div className='login-container'>
        <div className='login-text'>
            welcome to the login page
        </div>
        <div className='login-input'>
            <input type="text" placeholder='Enter your email' />
        </div>
        <div><input type="text" placeholder='Enter your password' /></div>
        <div>
            <button>Login</button>
        </div>
        <button onClick={onClick}>
          Sign up
        </button>
    </div>
  )
}
export default LoginSignup