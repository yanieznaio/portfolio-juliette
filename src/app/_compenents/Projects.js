

import React from 'react'
import { projects } from '@/data'
import Project from './Project'


const Projects = () => {
 
  return (
    <div className='w-[92%] md:w-3/6 max-w-[700px] flex flex-col gap-20 mt-28'>
      <div >
      <h1 className={` md:pl-12`}>Projets.</h1>
      </div>


      {
        projects && projects.map((project, i) => (
          
            <Project key={i} project={project}/>
        ))
      }
    </div>
  )
}

export default Projects


