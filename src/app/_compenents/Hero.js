import React from 'react'
import Image from 'next/image'

const Hero = ({background}) => {
  return (
    <div className='w-full h-[240px] relative'>
     <Image
      src={background}

      fill={true}
      priority={true}
      alt=""

    />
        
    </div>
  )
}

export default Hero
//height img : 240px