import './globals.css'
import { Inter } from 'next/font/google'
import Newheader from '@/components/Newheader'
import Navbar from '@/components/Navbar'

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  "title":"Bencharters",
  "description": "Transforming spaces with creativity and precision. Your trusted partner for painting and decorating solutions."
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Newheader />
        {/* <Navbar /> */}
        {children}
        <Footer />

        
        </body>
    </html>
  )
}
