import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '../components/Navbar'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechShop',
  description: 'Created by Muzammil Khan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      {children}</body>
    </html>
  )
}
