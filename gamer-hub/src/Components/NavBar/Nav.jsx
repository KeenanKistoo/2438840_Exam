import React from 'react';
import { NavLink } from 'react-router-dom';
import '../NavBar/Nav.css'

function Nav(){
    return (
      <header>
        <nav className="nav-bar">
            <section className="nav-head-sect">
                <h1 className="main-head">GameSpace</h1>
            </section>
            <section className="nav-link-sect">
                <ul className="link-sect">
                    <li><NavLink className='link' activeClassName='active' to='/'>Home</NavLink></li>
                    <li><NavLink className="link" activeClassName='active' to='/explore'>Explore</NavLink></li>
                    <li><NavLink className="link" activeClassName='active' to='/theory'>Theory</NavLink></li>
                    <li><NavLink className="link" activeClassName='active' to='/design'>Design</NavLink></li>
                    <li><NavLink className="link" activeClassName='active' to='/art'>Art</NavLink></li>
                    <li><NavLink className="link" activeClassName='active' id='about' to='/about'>About</NavLink></li>
                </ul>
            </section>
        </nav>
      </header>
    )
  }


export default Nav;

/*  NavLink usage reference: https://stackoverflow.com/questions/34418254/how-do-i-add-an-active-class-to-a-link-from-react-router 
    I was struggling to communicate to the user as to which page they're cuurrently on. Last year, all I did was have an array of 
    the page headings and if the page heading was the same as the nav btn inner html, I would set the class to active. With react, 
    I struggled with the first submission because my page heading was not changing. I tried using useParams but I was not setting
    an id and if I were, it would just be the headings itself which again is counter productive. After searching online, I found 
    <NavLink>. If the 'to=link' is the same as the current link the user is on, the activeClassName is applied. In this case, it is
    '.active'. When ommited 'activeClassName' the correct btn is still highlighted however, I am keeping the styling tag there just 
    to ensure it is there.
*/