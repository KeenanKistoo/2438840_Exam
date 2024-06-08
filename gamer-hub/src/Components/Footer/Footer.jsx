import React from 'react'
import '../Footer/Footer.css'
import IG from '../../Images/instagram.png'
import Git from '../../Images/github.png'
import LinkedIn from '../../Images/linkedin_corr.png'

function Footer() {
    let linkedInLink = 'https://www.linkedin.com/in/keenan-kistoo-b8379b272/';
    let gitLink = 'https://github.com/KeenanKistoo';
    let igLink = 'https://www.instagram.com/keenan_kistoo10/'

    function handleSocials(url){
        window.open(url, '_blank');
    }

    return (
      <footer className='footer'>
        <section className="social-btns">
            <button onClick={() => handleSocials(linkedInLink)} className="social-btn"><img className='social-img' src={LinkedIn} alt="LinkedIn Logo" /></button>
            <button onClick={() => handleSocials(gitLink)}  className="social-btn"><img className='social-img' src={Git} alt="LinkedIn Logo" /></button>
            <button onClick={() => handleSocials(igLink)}  className="social-btn"><img className='social-img' src={IG} alt="LinkedIn Logo" /></button>
        </section>
        <section className="res-sect">
            <p className="res-txt">Keenan Kistoo's GameSpace Website (2024)</p>
        </section>
      </footer>
    )
  }


  export default Footer