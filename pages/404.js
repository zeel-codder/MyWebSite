import React from "react"
import { Image  } from "@Blog/image"
import  Head from 'next/head'

export default function Custom404() {
    return (
        <>
            <Head>
            <title>404</title>
        </Head>
        <div className="column">
            <h1> </h1>
            <Image src='/404.svg' alt='404' width={1300} height={500}></Image>
            <h1 > 404 Page Not Found | 
                <a href='/'>Back To Home</a>
                 </h1>
        </div>
        </>
    )
  }