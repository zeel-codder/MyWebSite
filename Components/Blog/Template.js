// import '../styles/globals.css'
import React from "react";
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Meta from '../Meta'

function MyApp({ Component, data }) {

  // console.log(data)

  const {title,keywords}=data;
  return (
    

  <>
  <Meta title={title} keywords={keywords}></Meta>
  <Navbar></Navbar>
  <Component {...data} />
  <Footer></Footer>
  </>
    )
}

export default MyApp
