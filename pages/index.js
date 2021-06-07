import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React from "react";
import BlogShort from '@Blog/BlogShort'
import Template from '@Layout/Template'
import { Link, animateScroll as scroll } from "react-scroll";


export default function Home({data}) {

  const dic={data}

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


  <div className="ListOfBlogs blog-container" id="Read">
    {
      
      data.map((page) => {
        
        return (<BlogShort {...page} key={new Date().getMilliseconds()} />)
        
      })
      
    }
  </div>


</article>
  )
}


export async function getStaticProps(context) {
  
  // console.log(process.env.WebLink+'api/blog')
  

    let data=await axios.get(process.env.WebLink+'/api/blog')
    //  axios.get('/Blog')
    .then((res) => {
      const data1 = [];
      const index = [];
      // console.log(res.data);
        // console.log(res.data);
        const BlogInfo = res.data;
        BlogInfo.forEach(element => {
          let topic = element.topic;
          //  console.log(topic)
          if (!(topic in index)) {
            const add = {
            };
            add['topic'] = topic;
            add['data'] = [];
            index[topic] = data1.length;
            data1.push(add);
            // console.log(data1);
          }
          data1[index[topic]]['data'].push(element);
        });
        //  console.log(data1);
        
        return data1
      })
      .catch((err) => { return; })
      // console.log(data)
      // if(!data){
      //   data=null
      // }
      
      return {
        props: { data : data || []}, // will be passed to the page component as props
      }
}