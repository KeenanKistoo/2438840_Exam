import React from 'react'
import '../Footer/Footer.css'
import IG from '../../Images/instagram.png'
import Git from '../../Images/github.png'
import LinkedIn from '../../Images/linkedin_corr.png'

function Footer() {
    return (
      <footer className='footer'>
        <section className="social-btns">
            <button className="social-btn"><img className='social-img' src={LinkedIn} alt="LinkedIn Logo" /></button>
            <button className="social-btn"><img className='social-img' src={Git} alt="LinkedIn Logo" /></button>
            <button className="social-btn"><img className='social-img' src={IG} alt="LinkedIn Logo" /></button>
        </section>
      </footer>
    )
  }


  export default Footer