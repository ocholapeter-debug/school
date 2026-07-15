import React from 'react'
import './Login.css';

function Login() {
  return (
    <div className='login-page'>
      <div className='login-card'>
        <div className='login-header'>
          <span className='login-brand'> <a href='/'><strong className='band'>KAKUNGULU </strong>MEMORIAL SCHOOL</a></span>
          <h2>Welcome Back </h2>
          <p>sign in continue ...</p>
        </div>
        <form className='login-form' >

          <p className='error'></p>
                    <div className='login-form-group'>
            <label  className='label'> Enter Your Email Address</label>
            <input placeholder='chol@gmail.com' type='email' />
             

          
             <label  className='label'> Enter Your Password</label>
            <input placeholder='********' type='password' />
          </div>
          <button className='login-buttom'>SignIn</button>
        </form>
        <p className='login-switch'>Don't Have an Account <a href='/Signup'>SignUp</a></p>
      </div>
    </div>
  )
}

export default Login
