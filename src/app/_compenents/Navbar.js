'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname }from "next/navigation";

const nav ={

  hidden: {
    y: "-100vh"

  },
  visible: {
    y: "0",
    transition: {
      type: "spring", bounce: 0.20,
      duration: 0.5
    }
  }

}
const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='border flex justify-center'>
    <motion.nav variants={nav} initial="hidden" animate="visible" className='mt-[24px]  h-[48px] flex items-center gap-[8px] px-[16px] rounded-[100px] shadow shadow-nav bg-light font-semibold text-[13px] text-dark-light  fixed z-10 mx-auto border '>
      <Link href="/" className={`${pathname =="/" && "bg-slate-200"} hover:bg-slate-200 line leading-[16.8px] p-2 rounded-[100px] cursor-pointer`}>Accueil</Link>

      <Link href="/skill" className={`${pathname =="/skill" && "bg-slate-200"} hover:bg-slate-200 line leading-[16.8px] p-2 rounded-[100px] cursor-pointer`}>Compétences</Link>
      <Link href="/contact" className={`${pathname =="/contact" && "bg-slate-200"} hover:bg-slate-200 line leading-[16.8px] p-2 rounded-[100px] cursor-pointer`}>Contact</Link>
    </motion.nav>
    </div>

  )
}

export default Navbar

