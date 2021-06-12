import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React from "react";
// import BlogShort from '@B/BlogShort'
import Template from '@Layout/Template'
import { Link, animateScroll as scroll } from "react-scroll";
import BlogShort from '@Blog/BlogShort';

export default function Home({data}) {

  const dic={data,title:"zeel codder blogs", keywords:"zeel codder blog,html"}

  return (
    <Template Component={BlogList} data={dic}></Template>
  )
}

function BlogList({data}){

  
  return (

    <article className="">
  {/* <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee> */}
  
  <div className="blog_main1" id="home">
         
  {/* <img className="img" src='/images/home/DarkBlueClubLogo.png' className="logo"  alt="blog img"></img> */}
         <span className="logo-text blog-text" id="head">
            Start Reading And Learning Today
           <button className="btn" > 
           <Link to='Read' title='Get start'
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                          Lets Read
                                        </Link>
             </button>
         </span>
         
      
  
                                      </div> 

  <h1>Blogs</h1>
  <div className="ListOfBlogs blog-container" id="Read">
    {
      
      data.map((page,index) => {
        
        return (<BlogShort {...page} key={index} />)
        
      })
      
    }
  </div>


</article>
  )
}


export async function getStaticProps(context) {
  
    let data=await axios.get(process.env.WebLink+'/api/blog')
    .then((res) => {
        
        return res.data;
      })
      .catch((err) => { return; })
      // console.log(data)
      return {
        props: { data : data || []}, 
      }
}