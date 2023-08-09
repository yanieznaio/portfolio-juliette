"use client";
import React, {useRef, useState} from 'react'
import {motion, useScroll} from "framer-motion"
import Image from 'next/image'
import {BsArrowRight} from "react-icons/bs"

const variants = {
    hidden: {
        y: 500,
        opacity: 0,
    },
    visible: {
        
        y:0,
        opacity: 1,
        transition: {
            type: "spring",
            damping: 30,
            stiffness: 100,
          
         
        }
     
    }
}
const Project = ({project}) => {
    const [isInView, setIsInView] = useState(false)

   
  return (
    <motion.div  whileInView={() => setIsInView(true)} viewport={{once: true, amount: 0.5}}>
        <motion.div variants={variants} initial="hidden" animate={isInView && "visible"} className="flex flex-col gap-8 text-dark-light">
        <div className='w-5/6 m-auto flex flex-col gap-4'>
        <h2 className={`  font-bold text-[24px]`}>{project.name}</h2>
        <p className='text-dark-light2 text-[13px] md:text-[16px] leading-[22.4px] md:leading-[28.8px] font-normal'>{project.descrtiption}</p>
        <motion.a initial={{x:0}} whileHover={{x:10}} transition={{type:"spring", damping:6, stiffness:300}} href={project.url} target="_blank" className='transition ease-in-out cursor-pointer flex items-center gap-2 text-dark-light2 hover:text-dark-light font-medium text-[16px] '><BsArrowRight/>voir une démo</motion.a>
        </div>
        <div className='w-700 h-500'>
        <Image src={project.img} alt={project.name}   height={600} width={600} objectFit="cover"  className='rounded-[20px]' unoptimized={true}/>
        </div>

        </motion.div>

  </motion.div>
  )
}

export default Project
