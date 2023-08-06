"use client"
import {motion} from "framer-motion"
import React, { useState } from 'react'
import Image from "next/image"
const variants = {
    hidden: {
      y: 200,
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.20,
        duration: 1
      }
      
    
    }
  }
const SkillCard = ({skill}) => {
    const [isInView, setIsInView] = useState(false)

  return (
    <motion.div whileInView={() => setIsInView(true)} className=" flex w-full md:w-[48%] max-w-[340px]  h-[100px] ">
        <motion.div className="flex w-full p-4  border border-slate-200 rounded-[20px] hover:bg-slate-50  gap-4 cursor-pointer" variants={variants} initial="hidden" animate={isInView && "visible"}> 
            <div className="w-[75px] object-contain">
            <Image src={skill.img} alt={skill.name} width={"auto"} height={"auto"} ></Image>
            </div>
        
            <p className={` text-[16px] font-bold text-dark-light`}>{skill.name}</p>
        </motion.div>
    </motion.div>
  )
}

export default SkillCard
