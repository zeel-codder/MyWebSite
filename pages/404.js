import React from "react"
import { Image  } from "@Blog/image"
import  Head from 'next/head'

export default function Custom404() {
    return (
        <>
            <Head>
            <title>404</title>
        </Head>
        <div>
           
            <div>
            <img style={{width:'100%',height:'90vh'}} src='/404.svg' alt='404' layout="fill" />
            </div>
            <h3 className="center"> 404 Page Not Found | 
                <a href='/'>Back To Home</a>
            </h3>
        </div>
        </>
    )
  }