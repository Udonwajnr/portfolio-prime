import React from 'react'
import '../Assets/css/SkillsAndTools.css'


const SkillsAndTools = () => {
  return (
    <>
        <div className="skills__and__tools">
            <div className="skills__and__tools__header">
                <h3>Skills and Tools</h3>
            </div>
                <div className='skills'>
                    <div className="tools">
                        <span>Html & Css</span>
                        <span>javascripts</span>
                        <span>python</span>
                        <span>git</span>
                    </div>

                    <div className="frameworks">
                        <span>React</span>
                        <span>Django</span>
                        <span>Redux</span>
                    </div>
                    <div className="database">
                        <span>Postgrel</span>
                    </div>
                </div>
            
        </div>
    </>
  )
}

export default SkillsAndTools