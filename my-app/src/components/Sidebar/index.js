import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/victory.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ()=>{
    return(
    <div className='nav-bar'>
        <Link classname= 'logo' to = '/'>
         <img src={LogoS} className='img' alt='logo'/>
        </Link>
        <nav>
            <NavLink exact = 'true' activeclassname= 'active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeclassname= 'active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact = 'true' activeclassname= 'active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='blank' rel='noreferrer' href='https://www.linkedin.com/in/valentin-urcullu-a796551b1/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='blank' rel='noreferrer' href='https://github.com/valenurcullu'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
     </div>
     )
   
}

export default Sidebar