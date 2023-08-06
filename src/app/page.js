import Image from 'next/image'
import Navbar from '@/app/_compenents/Navbar'
import Hero from '@/app/_compenents/Hero'
import Presentation from '@/app/_compenents/Presentation'
import Link from 'next/link'
import background from "../../assets/background.webp"
import Projects from './_compenents/Projects'
import WorkTogther from './_compenents/WorkTogther'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">


     <Hero background={background} />
     <Presentation/>
     <Projects/>
     <WorkTogther/>
    </main>
  )
}

