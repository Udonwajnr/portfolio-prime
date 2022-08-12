import React from 'react'
import '../Assets/css/WorkCard.css'
import {AiOutlineEye} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
import CardTags from './CardTags'
import '../Assets/css/DarkMood.css'



const WorkCard = ({image,preview,title,gitRepo,tags,description}) => {
  return (
    <>
        <div className="">
            <div className="card">
                <div className="card-img">
                    <img src={image?.url} alt="" />
                </div>    
                <div className="card-body">
                    <div className="card-title">
                        <h3>{title}</h3>
                    </div>
                    
                    <div className='card-tags'>
                    {
                        tags.map((tags)=>{
                            return (
                                <CardTags key={tags.id} title={tags.title}/>
                            )
                        })
                    }
                    </div>
                <div className="card-text">
                    Music website made with react. <br /> This project was generated with strapi cli.
                </div>
                <div className="card-link">
                    <a href={preview} target='_blank' rel="noreferrer" className='preview'>
                        <AiOutlineEye size={19}/>
                        <span>
                        Preview
                        </span>
                    </a>
                    <a href={gitRepo} rel="noreferrer" className='gitrepo'>
                        <FaGithub size={19}/>
                        <span>
                        Github repo
                        </span>
                    </a>
                </div>
             </div>

            </div>        
        </div>   
    </>
  )
}

export default WorkCard