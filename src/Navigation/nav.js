import React, {useState, useEffect} from 'react'
import './nav.css'
import logo from '../img/param-logo.png';

const Nav = () =>{
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState
    (window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    useEffect(() => {
        
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
     
    return(
        <nav className="nav">
             <img 
                src={logo}
                alt='logo'
                width='100'
                
                />
                {(toggleMenu || screenWidth > 500) && (
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
                )}
           
            <button onClick={toggleNav} className='btn'>BTN</button>
        </nav>
    )
}
export default Nav