import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import React,{useEffect,useState} from "react";
// import BlogShort from '@B/BlogShort'
import Template from '@Layout/Template'
import { Link, animateScroll as scroll } from "react-scroll";
import BlogShort from '@Blog/BlogShort';
import Search from '@Blog/Serach';
import { WebLink } from '@const/List';
import LoadShort from 'Components/loading/LoderShort' 
import BlogLoad from 'Components/loading/BlogLoadder';


export default function Home() {

  const dic={title:"zeel codder blogs", keywords:"zeel codder blog,html", isShoWList:true}

  return (
    <Template Component={BlogList} data={dic}></Template>
  )
}

function BlogList(){

  const [data,setdata]=useState([])
  const [isLoading,setLoading]=useState(true)


  async function Getdata(){

    let data=await axios.get(WebLink+'/api/blog')
    .then((res) => {
        
        return res.data;
      })
      .catch((err) => { return; })
        setdata(data)
        setLoading(false)
      return data;
  }

  useEffect(() => {
    Getdata()
    console.log(data);
  }, [])

  
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
         {/* <video width="320" height="240"  src="/index.mp4" type="video/mp4"  loop autoPlay> */}

{/* </video> */}

{/* <img src="/zeel.jpg" /> */}
  <Search data={data}/>

  <h1 >Blogs</h1>
  {/* <BlogShort /> */}
  <div className="ListOfBlogs blog-container" >
    {

      isLoading 
    ?
    
    <BlogLoad />
    :
    
      
      data.map((page,index) => {
        
        return (<BlogShort {...page} key={index} />)
        
      })
      
    
    }
  </div>


</article>
  )
}

