import Head from 'next/head'
import Image from 'next/image'
import Main from '@Home/Main'
import React from 'react'
import Navbar from 'Components/navbar/navabarme'
import Footer from 'Components/footer/Footer'
import NavData from '@Data/navbar/data' 



export default function Home() {
  return (
    <div className="me" >
      <Navbar data={NavData}></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
