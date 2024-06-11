import React from 'react'
import '../About/About.css'
import cvPDF from '../../CV/KeenanKistoo_Curriculum_Vitae_19_03_2024.pdf'
import DL from '../../Images/download.png';

 function About()  {
    
    return (
      <main className='about-main'>
        <h3 className="sub-sub">Introducing Myself:</h3>
        <p className="disc">
          Hi, I'm Keenan Kistoo, a fourth-year BA Digital Arts student majoring in 
          <span className='highlight'> Interactive Media and Game Design. </span>
          Games have always been a fundamental part of my life.
          This course has provided a platform for me to explore 
          games further and acquire the necessary skills and knowledge
          to create and build games that help others, just as they have helped me.
        </p>
        <p className="disc">In my third year, I chose Interactive Media as my major.
          Honestly, I think I made it very difficult for myself with several poor decisions.
          However, these experiences have taught me the importance of simplicity and planning.
          It has also paved the career path that I intend to follow.
        </p>
        <h3 className="sub-two">Why this website?</h3>
        <p className="disc">The COVID-19 lockdown had a significant impact on the gaming industry. 
          It brought a lot of success to the industry, with games like Among Us thriving
          years after their initial release, and already successful titles like Call of Duty reaching
          even higher profits. Additionally, the lockdown created a more stable yet highly competitive
          space for streamers. eSports flourished during this time, transitioning from predominantly
          competitive LAN events to online events, allowing individuals from different regions, cities,
          provinces, and even countries to compete.
        </p>
        <p className="disc">This site was built to create a space for gamers to discover popular games and
          explore different genres. For individuals new to the video game world, the numerous options can be
          overwhelming. My goal is to make selecting games easier by providing brief overviews of various genre
          mechanics, helping them decide the game to play based on what they enjoy.
        </p>
        <h3 className="sub-two">Contact Information</h3>
        <p className="disc-centre">
          Contact Number: (060) 309-0426
        </p>
        <p className="disc-centre">
          Email: kistook19@gmail.com
        </p>
        <a className='cv-link' href={cvPDF} download>Download CV <span ><img className='dl-img' src={DL} alt='Download Symbol' /></span></a>
      </main>
    )
  }

export default About;

//Download Code: https://www.youtube.com/shorts/hbTpbKPmILw?feature=share