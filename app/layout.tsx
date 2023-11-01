import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import icon from './icon.png'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import Link from 'next/link'
import { ClientContext } from './ClientContext'

export const metadata: Metadata = {
  title: 'Data about coronovirus',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className='flex  flex-row  flex-nowrap xl:h-10 sm:h-20 bg-neutral-800  items-center'>
          <div className='pl-2  '>
            <Image className='     xl:h-5 xl:w-5 sm:h-10 sm:w-10' alt='U got a clickbait' src={icon}></Image> 
            </div>
            <Link href={'/'}><h1 className='pl-2   font-serif sm:text-xl xl:text-sm text-white'>Corona-Statistic.com </h1></Link>
            <Link href={'/bundeslander'} ><h1 className='pl-2    font-serif  hover:text-slate-300 sm:text-lg xl:text-xs text-slate-400'>Земли</h1></Link>
            <Link href={'/state-statistic'} > <h1 className='pl-2    font-serif  hover:text-slate-300  sm:text-lg xl:text-xs text-slate-400'>Города и округа</h1></Link>
          
        </div>
        <ClientContext>{children}</ClientContext> </body>
    </html>
  )
}
