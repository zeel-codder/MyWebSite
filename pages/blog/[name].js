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
import { useEffect } from "react";
import React from "react";
// import Reactmarkdown from 'react-markdown';
// import { useRouter } from 'next/router'
import axios from 'axios';
import Prism from 'prismjs';
// import Like from '@Blog/Like'
// import Share from '@Blog/share'
// import Template from '@Layout/Template'
import matter from 'gray-matter'
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
// import rehypeSanitize from 'rehype-sanitize'
import { WebLink } from "@const/List";
import Link from "next/link";
import  { Html } from 'next/document'

import loadable from '@loadable/component'
const Like = loadable(() => import('@Blog/Like'))
const Share = loadable(() => import('@Blog/share'))
const Template = loadable(() => import('@Layout/Template'))
// import scr
// const   Share    = loadable(() => import('@Blog/share'))
// const 





// ====================================



const Blog = ({ data, file, title, keywords, user }) => {

  const dic = { data, file, title, keywords, isShoWList: true, user }

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}




function BlogPage({ data, file, title, user }) {

  // let url='/';
  const { _id, username } = user



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
      
        {/* <!-- 1 st --> */}
       {/* {

         ! process.env.NEXT_PUBLIC_add
        &&
        <>
        <h1>zeel</h1>
        <ins className="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-4438223892792479"
        data-ad-slot="9230683994"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
        <script
        dangerouslySetInnerHTML={{
          __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
          
          `,
        }}
        />
        </>
      } */}
        {/* <article className="blog-container" dangerouslySetInnerHTML={{__html: file}} /> */}

        <Markdown
          onLoad={AddIndex}
          rehypePlugins={[rehypeRaw]}
        >

          {file}
        </Markdown>

        <div className="code-toolbar"><pre className="language-javascript"><code className=" language-javascript">console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span><span className="token string">'Thank You'</span><span className="token punctuation">)</span><span className="token punctuation">;</span>
        </code></pre>
        </div>
        {
          data !== 0 && <Like className="Share" blogInfo={data} isBlogShort={false}></Like>
        }
        <Share title={title}></Share>

        <p className="creator">
          Blog Write By:<Link href={WebLink + `/user/${_id}`}>
            {`${username || 'none'}`}
          </Link>
        </p>
      </div>

    </>

  )

}





export async function getStaticProps(context) {
  const name = context.params.name;

  console.log(name)
  let data = await axios.post(process.env.WebLink + "/api/blog/bloginfoone", { name })
    .then((response) => {
      // console.log(response.data);
      return JSON.parse(response.data.message)
    }
    )
    .catch((err) => console.log(err));
  // name=data.creator;

  const user = await axios.post(process.env.WebLink + '/api/user/finduser', { email: data.creator, isNotCreateToken: true })
    .then((response) => {

      return response.data.result
    }
    )
    .catch((err) => console.log(err));

  // data=data['data'].result;
  const file = await import('../../Blogs/' + name + '/blog.md');

  // axios.post(`/BlogInfoOne`,{name:blogname})
  const content = matter(file.default).content;

  const title = matter(file.default).data.title
  const keywords = matter(file.default).data.keywords
  // console.log(matter(file.default))

  // const tem=JSON.stringify(data);
  //     data=tem;
  return {
    props: { data, file: content, title, keywords, user }
  }
}
export async function getStaticPaths() {



  return {
    paths: [],
    fallback: 'blocking'
  }
}
export default Blog;