// import '../styles/globals.css'
import React from "react";
// import Navbar from '../navbar/navbar'
// import Footer from '../footer/Footer'
// import Meta from '../Meta'
// import MYButtons from '../MainPageButton'
import loadable from '@loadable/component'
const Navbar= loadable(() => import('../navbar/navbar'))
const Meta= loadable(() => import('../Meta'))
const MYButtons= loadable(() => import('../MainPageButton'))
const Footer= loadable(() => import('../footer/Footer'))

function MyApp({ Component, data }) {

  // console.log(data)

  const {title,keywords}=data;
  const  isShoWList=data?.isShoWList;
  return (
    

  <>
  <MYButtons></MYButtons>
  <Meta title={title} keywords={keywords}></Meta>
  <Navbar></Navbar>
  <Component {...data} />
  <Footer isShoWList={isShoWList}></Footer>
  </>
    )
}

export default MyApp
