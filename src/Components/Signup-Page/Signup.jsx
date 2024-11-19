import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='container'>
        <div className="signup-text">
            Register Your Account
        </div>
        <div className="user-name">
            <input type="name" placeholder='Enter your name' />
        </div>
        <div className="signup-email">
            <input type="email" placeholder='Email' />
        </div>
        <div className="signup-pass">
            <input type="password" placeholder='Enter your password' />
            <input type="password" placeholder='Re-Enter your password' />
        </div>
        <div className="submit">
            <button>Register</button>
        </div>
    </div>
  )
}

export default Signup