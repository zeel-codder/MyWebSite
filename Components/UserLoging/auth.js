import React from "react";
import Login from './Login'
import Meta from '../Meta'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'

export default function Home({isLogingIn}) {

  // const dic={data}

  return (
    <>
    <Navbar></Navbar>
    {
        isLogingIn 
        ?
        <>
        <Meta title="Login" keywords="Login into zeel codder web site"></Meta>
        <Login choice='Login' ></Login>
        </>
        :
        <>
        <Meta title="Singup" keywords="Singup into zeel codder web site"></Meta>
        <Login choice='Singup' ></Login>
        </>

    }
    <Footer></Footer>
    </>
  )
}