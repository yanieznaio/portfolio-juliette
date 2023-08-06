import React from 'react'

const Footer = () => {
  return (
    <div className='w-[92%] md:w-3/6 max-w-[700px] flex flex-col gap-2 md:flex-row items-center justify-between mt-28 mx-auto text-[14px] font-medium text-dark-light2 pb-12'>
      <p>
Créé par Juliette Orth.</p>
      <div className='flex gap-4'>
        <a href="https://github.com/yanieznaio" target="_blank "className='cursor-pointer hover:text-dark-light'>Github</a>
        <a href="/cv.pdf" target="_blank" className='cursor-pointer hover:text-dark-light'>Cv</a>

      </div>
    </div>
  )
}

export default Footer
//14px text 500
//width 86 max  700 justify between
