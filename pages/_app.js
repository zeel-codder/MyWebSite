// import '../styles/globals.css'
import  '../styles/index.css'
import  '../styles/Blog.css'
import  '../styles/prism.css'
import React from "react";
import {useEffect, useLayoutEffect} from 'react';
import {UserLogin} from '@api/User-Blog-Api'
import {User} from '@const/List'
import { useRouter } from 'next/router';
// import "animate.css";


function MyApp({ Component, pageProps }) {



  const router=useRouter()

  // useLayoutEffect(() => {
  //   try {
  //     // const number=document.querySelectorAll('.adsbygoogle').length;

  //     // console.log(number)
  //     for(let i =0;i<3;i++){
  //       // console.log('call')

  //       (window.adsbygoogle = window.adsbygoogle || []).push({});
  //     }
  //   } catch (err) {
  //     // console.log(err);
  //   }

  // })

  useEffect(async () => {
 

    try{
       await UserLogin();
     
    }catch(e){
      // console.log(e)
      router.push(window.location.href);
      localStorage.removeItem(User);
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
