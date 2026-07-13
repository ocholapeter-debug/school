import React from 'react'
import './Header.css';

function Header() {
  return (
    <div>
      <section className='main-card'>
        <div className='brand'>
          <img className='main-logo' alt='' src='/images/schoologo.png' />
          <span className='logo-text'>KMS</span>
        </div>

        <nav className='main-nav'>
          <ul className='main-list'>
            <li className='list-point'><a href=''>Home</a></li>
            <li className='list-point'><a href=''>Aboutus</a></li>
            <li className='list-point'><a href=''>Service</a></li>
            <li className='list-point'><a href=''>blogs</a></li>
            <li className='list-point'><a href=''>Signin</a></li>
            <li className='list-point'><a href=''>Signup</a></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Header
