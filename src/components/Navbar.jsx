import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import '../Assets/css/Navbar.css'
import MediaQuery from 'react-responsive'
import {RiBarChartHorizontalLine} from 'react-icons/ri'
import {useDispatch } from 'react-redux/'
import { toggle } from '../redux/slice/toggleSlice'
import {Link} from "react-scroll";
import '../Assets/css/DarkMood.css'


const Navbar = () => {
  const dispatch = useDispatch()

    return (
    <>
        <header className="navbar">
            <div className="logo">
                <h2>UU</h2>
            </div>
            <MediaQuery minWidth={960}>
            <div className="nav-links">
                <nav>
                    <ul>
                        <Link className='nav-items' to="work" spy={true} smooth={true} offset={-30} duration={800}>Work</Link>
                        <Link className='nav-items' to="resume" spy={true} smooth={true} offset={30} duration={800}>Resume</Link>
                        <Link className='nav-items' to="contact" spy={true} smooth={true} offset={100} duration={800}>Contact</Link>
                    </ul>
                    
                </nav>
            </div>
            <div className="socials">
                <a href="https://github.com/Udonwajnr/">
                    <FaGithub/>
                </a>
                <a href="https://twitter.com/Udonwa7">
                    <AiOutlineTwitter/>
                </a>
                <a href="https://www.linkedin.com/in/umoh-udonwa-jnr-01323923a/">
                    <AiFillLinkedin/>
                </a>
            </div>         
            </MediaQuery>
            <MediaQuery maxWidth={960}>
            <div className="nav-menu" onClick={()=>dispatch(toggle())}>
               <RiBarChartHorizontalLine size={21}/>
            </div>
            </MediaQuery>
        </header>
    </>
  )
}

export default Navbar