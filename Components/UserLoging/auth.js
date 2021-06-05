import React from "react";
import Login from './Login'

export default function Home({isLogingIn}) {

  // const dic={data}

  return (
    <>

    {
        isLogingIn 
        ?
        <Login choice='Login' ></Login>
        :
        <Login choice='Singin' ></Login>

    }
    </>
  )
}