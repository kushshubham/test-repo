import React from 'react'
import './LoginSignup.css'

const LoginSignup = () => {
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
    </div>
  )
}
export default LoginSignup