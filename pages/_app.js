// import '../styles/globals.css'
import  '../styles/Blog.css'
import  '../styles/index.css'
import  '../styles/prism.css'
import React from "react";
import {useEffect} from 'react';
import {UserLogin} from '@api/User-Blog-Api'
import {User} from '@const/List'

function MyApp({ Component, pageProps }) {

  useEffect(async () => {

    try{
      await UserLogin();
  
    }catch(e){
      console.log(e)
      localStorage.removeItem(User);
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
