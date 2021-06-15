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
import Template from '@Layout/Template'
import Search from "@Blog/Serach";
import BlogShort from "@Blog/BlogShort";
import BlogLoad from "Components/loading/BlogLoadder";
import { WebLink } from "@const/List";








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


  async function Getdata() {

    let data = await axios.get(WebLink + '/api/blog')
      .then((res) => {

        return res.data;
      })
      .catch((err) => { return; })
      data = data.filter((item) => item.topic === topic)
      setdata(data)
      setLoading(false)
  }

  useEffect(() => {
    Getdata()
    console.log(data);
  }, [])

  return (
    <>
      <Search data={data} />

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
