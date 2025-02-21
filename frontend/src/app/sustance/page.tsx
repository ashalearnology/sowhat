// import { Content } from 'next/font/google'
import Chart from '@/components/Chart'
import Content from '@/components/Content'
import Firstinfo from '@/components/Firstinfo'
import Fiveinfo from '@/components/Fiveinfo'
import Footer from '@/components/Footer'
import Fourthinfo from '@/components/Fourthinfo'
import Navbar from '@/components/Navbar'
import Secondinfo from '@/components/Secondinfo'
import Thirdinfo from '@/components/Thirdinfo'
import Uppertitle from '@/components/Uppertitle'
import React from 'react'


const page = () => {
  return (
    <>
    <Uppertitle/>
    <Navbar/>
    <Content/>
    <Firstinfo/>
    <Secondinfo/>
    <Thirdinfo/>
    <Fourthinfo/>
    <Chart/>
    <Fiveinfo/>
    <Footer/> 
    </>
  )
}

export default page