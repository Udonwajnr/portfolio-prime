import React from 'react'
import '../Assets/css/WorkExperience.css'
import '../Assets/css/DarkMood.css'



const WorkExperience = () => {
  return (
    <>
        <section className="work__experience">
            <div className="work__experience__header">
                <h3>Work Experience</h3>
            </div>

            <div className="work__experience__body">
                <div className="experience">
                    <h5>Intern Fullstack Developer</h5>
                    <p>Zuri</p>
                    <span>April 2021 - August 2022</span>
                </div>
                <div className="experience">
                    <h5>Junior Fullstack Developer</h5>
                    <p>SpiCodeX</p>
                    <span>April 2020 - December 2021</span>
                </div>

            </div>

        </section>
    </>
  )
}

export default WorkExperience