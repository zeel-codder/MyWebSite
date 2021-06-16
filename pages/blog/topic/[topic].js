/**
 @name:BlogPage
 @type:React Component
 @param:none
 @returns: JSX of BlogPage.
 @functionality : This Component is Data of Blog on screen.
**/
// Html/Html4SimpleTages/Html4SimpleTages.md

// Imports
// ====================================
import { useEffect, useState } from "react";
import React from "react";
// import Reactmarkdown from 'react-markdown';
// import { useRouter } from 'next/router'
import axios from 'axios';
// import Template from '@Layout/Template'
// import Search from "@Blog/Serach";
// import BlogShort from "@Blog/BlogShort";
// import BlogLoad from "Components/loading/BlogLoadder";
import { WebLink } from "@const/List";
import loadable from '@loadable/component'
const Template = loadable(() => import('@Layout/Template'))
const Search = loadable(() => import('@Blog/Serach'))
const BlogShort = loadable(() => import('@Blog/BlogShort'))
const BlogLoad = loadable(() => import('Components/loading/BlogLoadder'))








// ====================================



const Blogoftopic = ({ title, keywords, topic }) => {

  const dic = { title, keywords, isShoWList: true, topic }

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}
export default Blogoftopic;




function BlogPage({ topic }) {

  // console.log(data==[])
  const [data, setdata] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [list, setlist] = useState([])
  const numberBlog = 7;
  const add = 5;


  async function Getdata() {

    let data = await axios.get(WebLink + '/api/blog')
      .then((res) => {

        return res.data;
      })
      .catch((err) => { return; })
    data = data.filter((item) => item.topic === topic)
    setlist(data);
    setdata(data.splice(0, numberBlog))
    setLoading(false)
  }

  function handler() {
    if (list.length !== 0) {
      setdata(data.concat(list.splice(0, add)));
    }
  }

  useEffect(() => {
    Getdata()
    console.log(data);
  }, [])

  return (
    <>
      <Search data={list} />

      <h1 >Blogs</h1>
      <div className="ListOfBlogs blog-container" >

        {
          isLoading
            ?
            <BlogLoad></BlogLoad>
            :
            <>

              {

                data.length == 0 && <h1 className="row">🙏🙏 No Blogs on this Topic 🙏🙏</h1>

              }
              {


                data.map((page, index) => {

                  return (<BlogShort {...page} key={index} />)

                })
              }
              {

                list.length != 0

                &&

                <button className="btn" onClick={handler}>
                  Load More
                </button>
              }
            </>

        }


      </div>


    </>

  )

}





export async function getStaticProps(context) {
  const topic = context.params.topic;





  const title = topic;
  const keywords = `zeel codder ${topic}`;


  return {
    props: { title, keywords, topic }
  }
}
export async function getStaticPaths() {



  return {
    paths: [],
    fallback: 'blocking'
  }
}
