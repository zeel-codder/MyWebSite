// import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
// import Main from '@Home/Main'
// import Navbar from 'Components/navbar/navabarme'
// import Footer from 'Components/footer/Footer'
// import Meta from 'Components/Meta'
import NavData from '@Data/navbar/data' 

import loadable from '@loadable/component'
const   Main   = loadable(() => import('@Home/Main'))
const   Navbar   = loadable(() => import('Components/navbar/navabarme'))
const   Footer  = loadable(() => import('Components/footer/Footer'))
const   Meta   = loadable(() => import('Components/Meta'))



export default function Home() {
  return (
    <div >
      <Meta title="Zeel Codder" keyword="zeel prajapati, zeel sureshbhai parajapati, js, web, zeel prajapati personal web site" description="My name is zeel Sureshbhai prajapati. currently, I am doing Computer Science at Nirma university. I love to make web sites and also create android apps" />
      <Navbar data={NavData}></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  )
}
