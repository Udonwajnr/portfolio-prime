import React from 'react'
import me from '../Assets/img/me.jpg'
import '../Assets/css/Hero.css'
import MediaQuery from 'react-responsive'
import me2 from '../Assets/img/me2.jpg'
import { Link} from "react-scroll";
import { motion } from 'framer-motion'
import '../Assets/css/DarkMood.css'



const Hero = () => {
  return (
    <>
    <motion.div
       initial={{ opacity: 0 }}
       animate={{opacity:1}}
       transition={{
         duration: 0.7,
         delay: 0.3,
        }}
       
    >
        <section className="hero__section">
          <MediaQuery minWidth={960}>
            {/* <Zoom> */}
              <div className="hero">
                <div className="hero-img">
                    <img src={me} alt="" />
                </div>
                <div className="hero-text">
                    <div className="hero-write-up">
                      <h1>Hi, I am  Umoh and I'm a  <br /> <span> Junior Web Developer</span>.</h1>
                      <p>I'm a Junior Web developer based Uyo, Nigeria.I have 1 year of <br /> experience and i specilize in creating websites and web apps. I am <br /> open for new opportunities and interesting projects. </p>
                    </div>
                    <div className="hero-link">
                      <Link to="contact" spy={true} smooth={true} offset={100} duration={800} className="hero__contact">Contact me</Link>
                      <Link to="work" spy={true} smooth={true} offset={-30} duration={800} className="hero__work">Check my work</Link>
                    </div>
                </div>
              </div>
            {/* </Zoom> */}
          </MediaQuery>

          {/* responsive media query */}
            <MediaQuery maxWidth={960}>
              {/* <Zoom> */}
                <div className="responsive-hero">
                  <div className="responsive-hero-img">
                    <img src={me2} alt="" />
                  </div>
                  <div className="responsive-hero-text">
                      <div className="responsive-hero-write-up">
                            <h1>Hi, I Umoh and I'm  a <br /> <span> Junior Web Developer</span>.</h1>
                            <p>I'm a Junior Web developer based Uyo, Nigeria.I have 1 year of <br /> experience and i specilize in creating websites and web apps. I am open for new opportunities and interesting projects. </p>
                          </div>
                          <div className="responsive-hero-link">
                            <Link to="contact" spy={true} smooth={true} offset={100} duration={800} className="hero__contact">Contact me</Link>
                            <Link to="work" spy={true} smooth={true} offset={-30} duration={800} className="hero__work">Check my work</Link>
                       </div>
                  </div>
                </div>
              {/* </Zoom> */}
            </MediaQuery>
            {/* responsive media query ending*/}
        </section>
    </motion.div>
    </>
  )
}

export default Hero