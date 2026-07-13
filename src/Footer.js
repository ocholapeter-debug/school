import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <section className="footer-column">
        <h3>About Us</h3>
        <p>We are committed to providing quality education and strong community values for every student.</p>
      </section>

      <section className="footer-column">
        <h3>Contact</h3>
        <p>Phone: +256 123 456 789</p>
        <p>Email: info@kmschool.ac.ug</p>
      </section>

      <section className="footer-column">
        <h3>Quick Links</h3>
        <p>Admissions</p>
        <p>Programs</p>
        <p>Events</p>
      </section>
    </footer>
  )
}

export default Footer
