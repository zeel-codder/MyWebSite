import Head from 'next/head'
import Image from 'next/image'
import Main from 'Home/Main'
import Navbar from 'Home/navabar'
import Footer from 'Home/Footer'



export default function Home() {
  return (
    <div >
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
      <h1>Starting</h1>
    </div>
  )
}
