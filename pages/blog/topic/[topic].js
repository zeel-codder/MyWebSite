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








// ====================================



const   Blogoftopic = ({ data, title, keywords }) => {

  const dic = { data, title, keywords , isShoWList :true}

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}
export default Blogoftopic;




function BlogPage({ data }) {

  // console.log(data==[])

  return (
    <>
      <Search data={data}/>

<h1 >Blogs</h1>
<div className="ListOfBlogs blog-container" >

  {
  data.length==0 && <h1 className="row">🙏🙏 No Blogs on this Topic 🙏🙏</h1>
  }
  {
    
    data.map((page,index) => {
      
      return (<BlogShort {...page} key={index} />)
      
    })
    
  }
</div>


      </>

      )

}





      export async function getStaticProps(context) {
  const topic = context.params.topic;

      let data = await axios.post(process.env.WebLink + "/api/blog")
    .then((response) => {
      console.log(response.data);
      return response.data
    }
      )
    .catch((err) => console.log(err));

    data=data.filter((item)=>item.topic===topic)

    const title=topic;
    const keywords=`zeel codder ${topic}`;

 
      return {
        props: {data, title ,keywords}
  }
}
      export async function getStaticPaths() {



  return {
        paths: [],
      fallback: 'blocking'
  }
}
      