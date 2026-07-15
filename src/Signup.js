

import React from 'react'
import './Signup.css';

function Signup() {
  return (
     <div className='signup-page'>
      <div className='signup-card'>
        <div className='signup-header'>
          <span className='signup-brand'><a href='/'><strong className='band'>KAKUNGULU</strong> MEMORIAL SCHOOL</a></span>
          <h2>Create Account </h2>
          <p>Create to continue ...</p>
        </div>
        <form className='signup-form'>

          <p className='error'></p>
          <div className='signup-form-group'>
            <label  className='label'> Enter Your Username</label>
            <input placeholder='name' type='text'  />
          </div>  

          <div className='signup-form-group'>
            <label  className='label'> Enter Your Email Address</label>

            {/* adding eventlisteners on the email  */}
            <input placeholder='chol@gmail.com' type='email' />
          </div> 

               <div className='signup-form-group'>
                <label  className='label'> Enter Your Password</label>
                {/* adding eventlisteners on the password  */}
            <input placeholder='********' type='password'/>
            </div>
            
          
          <button className='signup-buttom' >Create Account</button>
        </form>
        <p className='signup-switch'>Already Have an Account <a href='/Login'>Signin</a></p>
      </div>
    </div>
  )
}

export default Signup
