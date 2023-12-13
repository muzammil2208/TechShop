import { Inter } from 'next/font/google'
import '../globals.css'
import Head from 'next/head'
import AdminNavbar from '../components/AdminNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TechShop admin page',
  description: 'Created by Muzammil Khan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      </Head>
      <body className={inter.className}>
      <div className="admin-container">
        <AdminNavbar/>
        <div className="admin-view-container">
        {children}
        </div>
      </div>
      </body>
    </html>
  )
}
