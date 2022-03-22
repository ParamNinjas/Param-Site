import React from 'react'
import './nav.css'
import logo from '../img/param-logo.png';

const Nav = () =>{
    return(
        <nav className="nav">
             <img
                src={logo}
                alt='logo'
                width='100'
                
                />
            <ul className='navMenu'>
                <li className='nav-item'>
                   <a href='#' className='nav_link'>Home</a>   
                </li>
                <li className='nav-item'>
                <a href='#' className='nav_link'>Partnerships</a>
                </li>
                <li className='nav-item'>
                <a href='#' className='nav_link'>Content</a>
                </li>
                <li className='nav-item'>
                <a href='#' className='nav_link'>Careers</a>
                 </li>
                <li className='nav-item'>
                <a href='#' className='nav_link'>About Us</a>
                 </li>
            </ul>
            {/* <div className='navToggler'>
                <div className='line1'></div>
                <div className='line2 '></div>
                <div className='line3'></div>
            </div> */}
        </nav>
    )
}
export default Nav