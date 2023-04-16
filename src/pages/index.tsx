import Header from '../../components/header';
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div className="">
       <h1>Lets build OpenExchange</h1>
       <Header />
      </div>
  )
}
