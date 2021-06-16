// import Head from 'next/head'
// import Image from 'next/image'
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { WebLink } from '@const/List';
// import BlogShort from '@B/BlogShort'
// import Template from '@Layout/Template'
// import BlogShort from '@Blog/BlogShort';
// import Search from '@Blog/Serach';
// import BlogLoad from 'Components/loading/BlogLoadder';
// import LoadShort from 'Components/loading/LoderShort' 


import loadable from '@loadable/component'
const Template = loadable(() => import('@Layout/Template'))
const BlogShort = loadable(() => import('@Blog/BlogShort'))
const Search = loadable(() => import('@Blog/Serach'))
const BlogLoad = loadable(() => import('Components/loading/BlogLoadder'))





export default function Home() {

  const dic = { title: "zeel codder blogs", keywords: "zeel codder blog,html", isShoWList: true }

  return (
    <div className="bg">
      <Template Component={BlogList} data={dic}></Template>
    </div>
  )
}

function BlogList() {

  const [data, setdata] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [list, setlist] = useState([])
  const numberBlog=10;
  const add=5;


  async function Getdata() {

    let data = await axios.get(WebLink + '/api/blog')
      .then((res) => {

        return res.data;
      })
      .catch((err) => { return; })
    setlist(data);
    setdata(data.splice(0, numberBlog))
    setLoading(false)
    // return data;
  }

  function handler() {
    if (list.length !==0) {
      setdata(data.concat(list.splice(0, add)));
    }
  }


  useEffect(() => {
    Getdata()
    // console.log(data);
  }, [])


  return (

    <article className="">
      {/* <marquee className="alert" behavior="scroll" direction="right">This page is still in production</marquee> */}

      <div className="blog_main1" id="home">
        <video width="750" height="500" className="Blog Video" loop autoPlay muted>
          <source src="/index.mp4" type="video/mp4" />
        </video>
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

      {/* </video> */}

      {/* <img src="/zeel.jpg" /> */}
      <Search data={list} />

      <h1 >Blogs</h1>
      {/* <BlogShort /> */}
      <div className="ListOfBlogs blog-container" >
        {

          isLoading
            ?

            <BlogLoad />
            :


            data.map((page, index) => {

              return (<BlogShort {...page} key={index} />)

            })


        }
        {

          list.length !=0

          &&

          <button className="btn" onClick={handler}>
            Load More
          </button>
        }
      </div>


    </article>
  )
}

