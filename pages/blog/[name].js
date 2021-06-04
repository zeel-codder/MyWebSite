/**
 @name:BlogPage
 @type:React Component
 @param:none
 @returns: JSX of BlogPage.
 @functionality : This Component is Data of Blog on screen.
**/


// Imports
// ====================================
import { useEffect, useState } from "react"
import Reactmarkdown from 'react-markdown';
// import { useRouter } from 'next/router'
import axios from 'axios';
import Prism from 'prismjs';
import Like from '@Blog/Like'
import matter from 'gray-matter'

// ====================================



const BlogPage = ({data,file}) => {





  //=============================
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used read the contend of read me and store in data hook.
  //=============================

  useEffect(() => {
    Prism.highlightAll()
    console.log(file)
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
          data !== 0 && <Like className="Share" data={data} like={data.like}></Like>
        }
      </div> 
    </>

  )
}


export async function getStaticProps(context) {
  const name=context.params.name;

  const data=await axios.post(process.env.WebLink+"api/bloginfoone", { name })
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
export default BlogPage;