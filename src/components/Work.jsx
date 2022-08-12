import React from 'react'
import WorkCard from './WorkCard'
import '../Assets/css/Work.css'
import { motion } from 'framer-motion'
import '../Assets/css/DarkMood.css'


const Work = ({data, setFiltered,filtered,tags,setTags}) => {
    
// console.log(tags)

  return (
    <motion.div
      initial={{ opacity: 0 }}
     whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
     transition={{
        duration:1,
     }}
    >
        <div className="work" id='work' >
            <div className="work-header" >
                <h1>Work</h1>
                <p>Check my commercial and non commercial projects. <br /> If you have any question feel free to ask me for more information</p>
            </div>

            {/* <MediaQuery minWidth={960}>
                    <div className="work-tags">

                        <span onClick={()=>setFiltered('All')}>All</span>
                        <span onClick={()=>setFiltered('html')}>Spring</span>
                        <span>Javascripts </span>
                        <span>Android </span>
                        <span>html and css </span>
                    </div>
            </MediaQuery> */}

            {/* <MediaQuery maxWidth={960}>
                    <div className="responsive-work-tags">
                        <span>React</span>
                        <span>html & css</span>
                    </div>
            </MediaQuery> */}
                    <section className="work-card">
                {
                data.map((data)=>{
                   return (
                    <WorkCard key={data.id} image={data.image} title={data.title} preview={data.preview} gitRepo={data.gitRepo} tags={data.tags}/>
                )
                })
                 }
            </section>
        </div>
    </motion.div>
    
  )
}

export default Work