import React from "react";
import Head from 'next/head'
import { useEffect } from "react";

// import Document, { Html, Head } from 'next/document'
const Meta = ({ title, keywords,description }) => {

  // useEffect(async ()=>{

  //   const number=await document.querySelectorAll('.adsbygoogle')
  //   console.log(document)
  //   console.log(number)
  //   console.log(document.querySelectorAll('.adsbygoogle'))
  // },[])



  useEffect(() => {

    try {
      // const number=document.querySelectorAll('.adsbygoogle').length;

      console.log(description)
      for(let i =0;i<3;i++){
        // console.log('call')

        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log(err);
    }
  }, []);



  // zeel-codder web site for programmer and student. the web site where you find blog on demanding technology. Read and make you life good.

    return (

        <Head>
            
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta httpEquiv="content-language" content="en-us" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            {/* <meta name="keywords" content="HTML, CSS, JavaScript,Node js , Zeel , zeelcodder, React js, Node js, Blog, c, java, python, error, competitive programming, blog" /> */}
            <meta name="keywords" content={keywords} />
            <meta name="author" content="zeel prajapati" />
            <meta name="description" content={description || 'zeel-codder web site for programmer and student. the web site where you find blog on demanding technology. Read and make you life good.'} />
            <link rel="shortcut icon" href="/zeel.jpg" />
            {/* <link rel="preload" as="image" href="/index.jpg" /> */}

            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-BC9RB4MTPH"></script>
      
              <script
              async
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
            
            `,
          }}
          /> 
        
          <script async data-ad-client="ca-pub-4438223892792479" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>

           <meta property="" content=""></meta>
           <meta property="og:title" content={title} />
           <meta property="og:type" content="website" />
           <meta property="og:url" content="https://zeelcodder.tech/" />
           <meta property="og:description" content={description || 'zeel-codder web site for programmer and student. the web site where you find blog on demanding technology. Read and make you life good.'} />


          
        </Head>
       

    )
}

export default Meta;