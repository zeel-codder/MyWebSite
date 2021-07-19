import React from "react"
import { Image  } from "@Blog/image"
import Head from 'next/head'

export default function Custom404() {
    return (
        <div className="column">
               <Head>
            <title>500</title>
             </Head>
            <h1> </h1>
            <Image src='/404.svg' alt='404' width={1300} height={500}></Image>
            <h1 > Some Error Happened | 
                <a href='/'>Back To Home</a>
                 </h1>
        </div>
    )
  }