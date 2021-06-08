import React from "react";
import Head from 'next/head'

const Meta= ({title,keywords}) =>{
  
    
    return(

        <Head>
        <title>{title}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="HTML, CSS, JavaScript,Node js , Zeel , zeelcodder, React js, Node js, Blog, c, java, python, error, competitive programming, zeel prajapati, Anteryami, kalol" />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="zeel prajapati" />
        <meta name="description" content="zeel-codder web site for programmer and student" />
        </Head>
        
    )
}

export default Meta;