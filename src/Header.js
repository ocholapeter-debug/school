import React from 'react'
import './Header.css';
/* Link component from React Router enables navigation between pages 
   without triggering a full page reload */
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <section className='main-card'>
        <div className='brand'>
          <img className='main-logo' alt='' src='/images/schoologo.png' />
          <span className='logo-text'>KAKUNGULU MEMERIAL SCHOOL KIBULI</span>
        </div>

        <nav className='main-nav'>
          <ul className='main-list'>
            {/* Link to='/' navigates to the Home page */}
            <li className='list-point'><Link to='/'>Home</Link></li>
            {/* Link to='/Aboutus' navigates to the About Us page */}
            <li className='list-point'><Link to='/Aboutus'>Aboutus</Link></li>
            {/* Link to='/Services' navigates to the Services page */}
            <li className='list-point'><Link to='/Services'>Service</Link></li>
            {/* Link to='/login' navigates to the Login page */}
            <li className='list-point'><Link to='/login'>Signin</Link></li>
            {/* Link to='/Signup' navigates to the Signup page */}
            <li className='list-point'><Link to='/Signup'>Signup</Link></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}

export default Header
