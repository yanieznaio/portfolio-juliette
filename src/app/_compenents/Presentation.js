"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {AiFillGithub} from "react-icons/ai"
import Image from 'next/image'
import emoji from "../../../assets/homeEmoji.webp"


const text = {
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
      duration: 0.5
    }
    
  
  }
}
const img = {
  hidden: {

    opacity: 0,

  },
  visible: {
    opacity: 1,

    transition: {
      
      type: "spring"
    }
  }
}
const Presentation = () => {
  const [isInView, setIsInView] = useState(false)
  return (
    <div className='w-[92%] md:w-3/6 max-w-[700px]'>
      <motion.div className={`w-full flex flex-col gap-5 -mt-16`} >
        <motion.div variants={img} initial="hidden" animate="visible" className='z-50'>
        <Image alt="emoji" src={emoji} width={72} height={72}></Image>
        </motion.div>
   
      <motion.h1 variants={text} initial="hidden" animate={"visible"} transition={{type: "spring", duration: 0.1,bounce: 0.20}} className={`font-extrabold text-[35px] md:text-[48px] text-dark-light leading-[48px]`}>Développeuse Web</motion.h1>
      <motion.p variants={text} initial="hidden" animate={"visible"} transition={{type: "spring", delay: 0.1, duration: 0.1, bounce: 0.20}} className='text-[18px] md:text-[24px]  leading-[30.6px] md:leading-[40.8px] text-dark-light2'> 
    
Bienvenue sur mon Portfolio. Je m'appelle Juliette. Je suis développeuse front-end.
       </motion.p>
    </motion.div>
    <div className='text-[24px] text-dark-light2 hover:text-dark-light flex mt-5'>
        <motion.a variants={text} initial="hidden" animate={"visible"} transition={{type: "spring",delay: 0.2, duration: 0.1, bounce: 0.20}} href='https://github.com/yanieznaio' target="_blank"><AiFillGithub/></motion.a>
       
    </div>
    <div className='w-[4px] h-[64px] bg-light-gray m-auto mt-[80px]'></div>
    </div>

   
  
  )
}

export default Presentation
//font weight 800
//sizw 48px
//familyplus jakarta sans , sans serif
//line heught: 57.6px