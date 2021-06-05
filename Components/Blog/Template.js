// import '../styles/globals.css'
import React from "react";
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'

function MyApp({ Component, data }) {

  
  return (
    

  <>
  <Navbar></Navbar>
  <Component {...data} />
  <Footer></Footer>
  </>
    )
}

export default MyApp
