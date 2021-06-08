import Head from 'next/head'
import Image from 'next/image'
import Main from '@Home/Main'
import React from 'react'
import Navbar from 'Components/navbar/navabarme'
import Footer from 'Components/footer/Footer'
import NavData from '@Data/navbar/data' 
import Meta from 'Components/Meta'



export default function Home() {
  return (
    <div className="me" >
      <Meta title="zeel codder" keyword="zeel prajapati, zeel sureshbhai parajapati, js, web, zeel prajapati personal web site" />
      <Navbar data={NavData}></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
