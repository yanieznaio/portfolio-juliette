import './globals.css'
import { Inter } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import Navbar from './_compenents/Navbar'
import Footer from './_compenents/Footer'
export const inter = Inter({ subsets: ['latin'],  variable: '--font-inter', })
export const jakarta =Plus_Jakarta_Sans({subsets: ['latin'], variable: '--font-jakarta'})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
