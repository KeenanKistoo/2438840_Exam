import React from 'react'
import UpArrow from '../../Images/up-arrow_corr.png'
import '../Scroll/Scroll.css'

function Scroll () {

    //https://www.youtube.com/watch?v=rPsb1BObO50
    function ScrollTo(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return (
      <section>
        <button onClick={() => ScrollTo()}className='scroll-btn'>
            <img className='scroll-img' src={UpArrow} alt="Up Arrow For Scroll To Top" />
        </button>
    </section>
    )
  }


export default Scroll