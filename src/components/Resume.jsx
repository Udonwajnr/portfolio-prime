import React from 'react'
import {HiOutlineDownload} from 'react-icons/hi'
import '../Assets/css/Resume.css'
import Education from './Education'
import SkillsAndTools from './SkillsAndTools'
import WorkExperience from './WorkExperience'
import me2 from '../Assets/img/me2.jpg'
import MediaQuery from 'react-responsive'
import pdf from '../Assets/Umoh-1.pdf'
import { motion } from 'framer-motion'

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
     transition={{
        duration:1,
     }}
     >
     
     <section className="resume">
         <div className="resume-header">
             <h1>Resume</h1>
         </div>
         <Education/>
         <WorkExperience/>
         <SkillsAndTools/>
         <div className="download-resume">
             <p>You can download my resume as pdf</p>
             <a href={pdf} download={'Umoh.pdf'}>
                 <HiOutlineDownload size={20} className='icon'/>
                 <span>Download</span>

             </a>
         </div>
     <MediaQuery minWidth={960}>
         <div className="circular-img">
             <img src={me2} alt="" />
         </div>
     </MediaQuery>
     </section>
    </motion.div>
  )
}

export default Resume