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
import Reactmarkdown from 'react-markdown';
// import { useRouter } from 'next/router'
import axios from 'axios';
import Prism from 'prismjs';
import Like from '@Blog/Like'
import Template from '@Layout/Template'
import matter from 'gray-matter'

// ====================================



const Blog = ({data,file}) => {

  const dic={data,file}

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}




function BlogPage({data,file}){


  //=============================
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used read the contend of read me and store in data hook.
  //=============================

  useEffect(() => {
    setTimeout(() => {
      Prism.highlightAll();
  }, 0);
    // console.log(file)
  }, [])

  // console.log(blogInfo,'main');
  // Prism.usePrismHighlightAll();
  return (
    <>
      {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: text}}> */}

      {/* <Tem></Tem> */}
       <div className=" blog-container">
        <Reactmarkdown
        
          // plugins={[gfm]}
          
          allowDangerousHtml='true'
        >
          {file}
        </Reactmarkdown>        {/* </article> */}
        {
          data !== 0 && <Like className="Share" blogInfo={data} isBlogShort={false}></Like>
        }
      </div> 
    </>

  )

}

export async function getStaticProps(context) {
  const name=context.params.name;

  const data=await axios.post(process.env.WebLink+"/api/bloginfoone", { name })
  .then((response) => {
    // console.log(response.data);
    return JSON.parse(response.data.message)
  }
  )
  .catch((err) => console.log(err));
  
  const file = await import('../../Blogs/'+data.url);

  // axios.post(`/BlogInfoOne`,{name:blogname})
  const content=matter(file.default).content;
  return {
    props:{data,file:content}
  }
}
export async function getStaticPaths() {



  return {
    paths: [],
    fallback: 'blocking'
}
}
export default Blog;