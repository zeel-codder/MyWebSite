import React from "react";
import Login from './Login'
import Meta from '../Meta'
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'

// import loadable from '@loadable/component'
// const  Login = loadable(() => import('./Login'))
// const  Meta = loadable(() => import('../Meta'))
// const  Navbar = loadable(() => import('../navbar/navbar'))
// const  Footer = loadable(() => import('../footer/Footer'))

export default function Home({isLogingIn,clientId}) {

  // const dic={data}

  return (
    <>
    <Navbar></Navbar>
    {
        isLogingIn 
        ?
        <>
        <Meta title="Login" keywords="Login into zeel codder web site"></Meta>
        <Login choice='Login' clientId={clientId}></Login>
        </>
        :
        <>
        <Meta title="Singup" keywords="Singup into zeel codder web site"></Meta>
        <Login choice='Singup' clientId={clientId}></Login>
        </>

    }
    <Footer></Footer>
    </>
  )
}