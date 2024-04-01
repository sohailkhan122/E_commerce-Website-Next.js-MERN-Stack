"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
import { usePathname } from 'next/navigation'
import NoteState from '@/context/notstate'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const shouldRenderHeaderAndFooter = pathname !== '/signin' && pathname !== '/login' && pathname !== '/admin' && pathname !== '/admin_login';

  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteState>
          {shouldRenderHeaderAndFooter && <Header />}
          {children}
          {shouldRenderHeaderAndFooter && <Footer />}
        </NoteState>
      </body>
    </html>
  )
}
