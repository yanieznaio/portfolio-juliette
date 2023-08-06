"use client"

import Hero from "../_compenents/Hero";
import background from "../../../assets/skillsBackground.webp"
import { motion } from "framer-motion";
import emoji from "../../../assets/skillsEmoji.webp"
import Image from "next/image";
import js from "../../../assets/js.png"
import reactLogo from "../../../assets/react.png"
import tailwindLogo from "../../../assets/tailwind.jpg"
import framerLogo from "../../../assets/framer.jpeg"
import nextLogo from "../../../assets/nextjs.png"
import nodeLogo from "../../../assets/node.jpg"
import mongoLogo from "../../../assets/mongo.png"
import pythonLogo from "../../../assets/python.png"
import javaLogo from "../../../assets/java.jpg"
import vsLogo from "../../../assets/vscode.jpg"
import notionLogo from "../../../assets/notion.jpeg"
import linuxLogo from "../../../assets/linux.jpg"
import WorkTogther from "../_compenents/WorkTogther";
import SkillCard from "./SkillCard";

const ressources = [
    {
     title: "Acquises",
     content: [
        {
            name: "Javascript",
            img: js,
        },
        {
            name: "React",
            img: reactLogo,
        },
        {
            name: "Tailwind",
            img: tailwindLogo
        },
        {
            name: "Framer Motion",
            img: framerLogo
        }
     ]
    },
    {
        title: "familliére",
        content: [
            {
                name: "Next js",
                img: nextLogo

            },
            {
                name: "Node js",
                img: nodeLogo
            },
            {
                name: "MongoDb",
                img: mongoLogo
            },
            {
                name: "Python",
                img: pythonLogo
            },
            {
                name: "Java",
                img: javaLogo
            }

        ]
    },
    {
        title:"outils",
        content: [
            {
                name: "VsCode",
                img: vsLogo
            },
            {
                name: "Notion",
                img: notionLogo
            },
            {
                name: "Linux",
                img: linuxLogo
            }
        ]
    },

]

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
        delay: 0.1,
        type: "spring"
      }
    }
  }
export default function Page() {
    

    return (
        <>
         <div className="flex min-h-screen flex-col items-center">

            <Hero background={background}/>
            <div className='w-[60%] md:w-3/6 max-w-[700px] flex flex-col gap-10 -mt-16'>
            <div className={`w-full flex flex-col gap-5  `}>
                <motion.div variants={img} initial="hidden" animate="visible">
                <Image alt="emoji" src={emoji} width={72} height={72} className="z-50"></Image>
                </motion.div>
           
            <motion.h1 variants={text} initial="hidden" animate="visible" className={` font-extrabold text-[35px] md:text-[48px] text-dark-light leading-[48px]`}>Compétences</motion.h1>
            <motion.p variants={text} initial="hidden" animate="visible" className='text-[14px] md:text-[18px] leading-[22.4px] md:leading-[28.8px]  text-dark-light2'>Voici une liste de mes compétences ainsi que les outils que j'utilise au quotidien.</motion.p>
            </div>
            <div className="flex flex-col gap-16">
                {
                    ressources.map((ele, i) => (
                        <div key={i} className="flex flex-col gap-4 ">
                        <h2 className={`font-bold text-[30px] text-dark-light`}>{ele.title}:</h2>
                        <div className="flex flex-wrap w-fill gap-5 justify-center md:justify-center">
                            {
                                ele.content.map((skill, i) => (
                                    <SkillCard key={i} skill={skill}/>
                               
                               
                                ))
                            }
                        </div>
                        </div>
                    ))
                }
                
            </div>
            </div>
            <WorkTogther/>
        </div>
  
        </>
    
    )
  }
  
  
  //rgba(0, 23, 55, .1); border
  //hover bg