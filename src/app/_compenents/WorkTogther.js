import React from 'react'
import emoji from "../../../assets/contactEmoji.webp"
import Image from 'next/image'
import Link from 'next/link'
import {BsArrowRight} from "react-icons/bs"

const WorkTogther = () => {
  return (
    <div className='w-[92%] md:w-3/6 max-w-[700px] mt-28 '>
            <div className='w-[4px] h-[64px] bg-light-gray m-auto'></div>
            <div className='mt-28 bg-light-gray2 p-[40px] flex flex-col gap-4 rounded-2xl w-3/4 md:w-full mx-auto'>
                <div className='flex gap-4 items-center'>
                    <Image src={emoji} alt="emoji" width={40} height={40} className='hidden md:block'></Image>
                <h3 className={`font-bold text-[20px] md:text-[24px] text-dark-light`}>Je cherche actuellement un travail.</h3>
                </div>
         
                <p className=' text-[13px] md:text-[16px] text-dark-light2 '>Je recherche actuellement un poste de développeuse front-end ,  Vous recherchez un/e développeur/se créatif / front end  ?</p>
                <Link className='transition ease-in-out flex items-center gap-2 bg-dark-light text-white rounded-md w-fit p-3 text-[14px] font-medium hover:opacity-80' href="/contact">Me contacter <BsArrowRight/></Link>
            </div>

            <div className='w-[4px] h-[64px] bg-light-gray m-auto mt-[80px]'></div>
      
    </div>
  )
}

export default WorkTogther

//rgba(0, 23, 55, 0.03
//padding 40px

//titre 24px
//p 18px
//button height  auto font 12px