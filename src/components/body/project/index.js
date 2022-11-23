import React from 'react'
import { ProjectData } from '../../../assets/data/projects';
import './project.css';
import ProjectCard from "./project-card";
import Seperator from '../../common/seperator';

function Project() {
  const data= ProjectData
  return (
    <div className='projects'>
      <Seperator/>
      <label className='section-title'>Projects</label>
      <div>
        {data.map((project)=>{

          return <ProjectCard project={project}/>

          

        }
        
        )}
      </div>
    </div>
  )
}

export default Project