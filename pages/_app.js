// import '../styles/globals.css'
import  '../styles/index.css'
import  '../styles/Blog.css'
import  '../styles/prism.css'
import React from "react";
import {useEffect} from 'react';
import {UserLogin} from '@api/User-Blog-Api'
import {User} from '@const/List'
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router=useRouter()

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
