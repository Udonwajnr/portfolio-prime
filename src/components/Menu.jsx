import React from 'react'
import '../Assets/css/Menu.css'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import { useDispatch,useSelector } from 'react-redux'
import { reset } from '../redux/slice/toggleSlice'
import { Link} from "react-scroll";
import { AnimatePresence, motion } from 'framer-motion'
import {BsSun} from 'react-icons/bs'
import {BsMoon} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { darkMood, lightMood } from '../redux/slice/darkMoodSlice'
import '../Assets/css/DarkMood.css'

const Menu = () => {
  const value = useSelector(state=>state.toggle.value)
  const dark = useSelector(state=>state.darkMood.value)
  console.log(value)
  const dispatch = useDispatch()

    return (
        <AnimatePresence>
         {
            value&&
            (<motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            >
                <div className="menu">
                    <div className="close-bar" onClick={()=>dispatch(reset())}>
                        {/* <GrClose size={20} /> */}
                        <AiOutlineClose size={20} />
                    </div>
                   { dark ? 
                    <div className="mode" onClick={()=>dispatch(lightMood())}>
                            <BsSun size={20} />
                    </div>
                    :
                    <div className="mode" onClick={()=>dispatch(darkMood())}>
                            <BsMoon size={20} />
                    </div>
                    
                    }
                        <nav>
                            <ul className='menu-items'>
                                <li>
                                <Link className='nav-items' to="work" spy={true} smooth={true} offset={-30} duration={800} onClick={()=>dispatch(reset())}>Work</Link>
                                </li>
                                <li>
                                <Link className='nav-items' to="resume" spy={true} smooth={true} offset={30} duration={800} onClick={()=>dispatch(reset())}>Resume</Link>
                                </li>
                                
                                <li>
                                <Link className='nav-items' to="contact" spy={true} smooth={true} offset={100} duration={800} onClick={()=>dispatch(reset())}>Contact</Link>
                                </li>
                            </ul>
                    </nav>
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
                </div>
            </motion.div>)
         }   
        </AnimatePresence>
  )
}

export default Menu