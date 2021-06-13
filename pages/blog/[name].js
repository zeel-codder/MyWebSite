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
import Prism from 'prismjs';
import Like from '@Blog/Like'
import Share from '@Blog/share'
import Template from '@Layout/Template'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'







// ====================================



const Blog = ({ data, file, title, keywords }) => {

  const dic = { data, file, title, keywords }

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}




function BlogPage({ data, file, title }) {

  // let url='/';



  //=============================
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used read the contend of read me and store in data hook.
  //=============================

  useEffect(() => {
    setTimeout(() =>
      Prism.highlightAll()
      , 0)
    // seturl(window.location.href)
    // console.log(window)


  }, [])

  function AddIndex() {
    console.log(document.querySelectorAll('.blog-container  > h1'))
  }

  // console.log(blogInfo,'main');
  // Prism.usePrismHighlightAll();
  return (
    <>

      {/* <Tem></Tem> */}
      <div className="blog-container">
        {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: file}} /> */}

        <Markdown
          onLoad={AddIndex}
          rehypePlugins={[rehypeRaw]}
        >

          {file}
        </Markdown>
        <div class="code-toolbar"><pre class=" language-javascript"><code class=" language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Thank You'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        </code></pre>
        </div>
          {
            data !== 0 && <Like className="Share" blogInfo={data} isBlogShort={false}></Like>
          }
          <Share title={title}></Share>

        </div>
      </>

      )

}





      export async function getStaticProps(context) {
  const name = context.params.name;

      let data = await axios.post(process.env.WebLink + "/api/bloginfoone", {name})
    .then((response) => {
      // console.log(response.data);
      return JSON.parse(response.data.message)
    }
      )
    .catch((err) => console.log(err));

      // data=data['data'].result;
      const file = await import('../../Blogs/' + name+'/blog.md');

  // axios.post(`/BlogInfoOne`,{name:blogname})
      const content = matter(file.default).content;

      const title = matter(file.default).data.title
      const keywords = matter(file.default).data.keywords
      // console.log(matter(file.default))

      // const tem=JSON.stringify(data);
      //     data=tem;
      return {
        props: {data, file: content, title ,keywords}
  }
}
      export async function getStaticPaths() {



  return {
        paths: [],
      fallback: 'blocking'
  }
}
      export default Blog;