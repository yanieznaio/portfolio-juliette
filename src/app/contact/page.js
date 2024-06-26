"use client"
import { motion } from "framer-motion"
import Hero from "../_compenents/Hero";
import background from "../../../assets/contactBackground.webp"
import Image from "next/image";
import emoji from "../../../assets/contactEmoji.webp"
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { useRef } from "react";
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
export default function Page() {

  const form = useRef();

  const handleOnSubmit = (e) => {


    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message envoyé ! Je vous recontacterai dans les plus brefs délais.'
        })
      }, (error) => {

        Swal.fire({
          icon: 'error',
          title: "Une erreur s'est produite",
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (


    <div className="flex flex-col items-center min-h-screen">

      <Hero background={background} />
      <div className='w-[60%] md:w-3/6 max-w-[600px] flex flex-col gap-5 -mt-16 '>
        <motion.div variants={img} initial="hidden" animate="visible">
          <Image alt="emoji" src={emoji} width={72} height={72} className="z-50"></Image>
        </motion.div>

        <motion.h1 variants={text} initial="hidden" animate="visible" className={` font-extrabold text-[35px] md:text-[48px] text-dark-light leading-[48px]`}>Contactez moi.</motion.h1>
        <motion.p variants={text} initial="hidden" animate="visible" className='text-[14px] md:text-[15px] leading-[22.4px] md:leading-[25.6px]  text-dark-light2'>
          Vous souhaitez me contacter ? Vous recherchez une développeuse front end ?
          Vous pouvez dès maintenant m’envoyer un message grâce à ce formulaire de contact. Je vous répondrez dans les plus brefs délais.
        </motion.p>

        <motion.form ref={form} onSubmit={handleOnSubmit} variants={text} initial="hidden" animate="visible" className="flex flex-col w-full gap-2 m-auto">
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 mb-2 md:w-1/2 md:mb-0">

              <input type="text"
                required
                name="user_name"
                placeholder="Nom"
                className="px-4 py-2 rounded-md outline-none bg-light-gray2">

              </input>
            </div>
            <div className="w-full px-3 md:w-1/2 ">

              <input type="text"
                required
                name="email"
                placeholder="Email" className="px-4 py-2 rounded-md outline-none bg-light-gray2"></input>
            </div>
          </div>
          <textarea placeholder="message"
            required
            name="Message"
            className="w-full h-48 p-2 rounded-md outline-none resize-none bg-light-gray2"></textarea>
          <button type="submit" className="transition ease-in-out w-full  bg-dark-light text-white rounded-md p-3 hover:opacity-80 font-semibold text-[15px]">Envoyer le message</button>
        </motion.form>


      </div>

    </div>


  )
}


