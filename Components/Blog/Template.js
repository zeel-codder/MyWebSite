// import '../styles/globals.css'
import React from "react";
import Navbar from '../navbar/navbar'
import Footer from '../footer/Footer'
import Meta from '../Meta'
import MYButtons from '../MainPageButton'


function MyApp({ Component, data }) {

  // console.log(data)

  const {title,keywords,description}=data;
  const  isShoWList=data?.isShoWList;
  return (
    

  <>
  <MYButtons></MYButtons>
  <Meta title={title} keywords={keywords} description={description}></Meta>
  <Navbar></Navbar>
  <Component {...data} />
  <Footer isShoWList={isShoWList}></Footer>
  </>
    )
}

export default MyApp
