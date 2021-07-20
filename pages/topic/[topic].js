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

import React from "react";
// import Reactmarkdown from 'react-markdown';
// import { useRouter } from 'next/router'
import Template from '@Layout/Template'
// import Search from "@Blog/Serach";
// import BlogShort from "@Blog/BlogShort";
// import BlogLoad from "Components/loading/BlogLoadder";
import List from '@Blog/listBlog'

// import loadable from '@loadable/component'
// const Template = loadable(() => import('@Layout/Template'))








// ====================================



const Blogoftopic = ({ data }) => {

  const dic = { ...data, isShoWList: true }

  return (
    <Template Component={BlogPage} data={dic}></Template>
  )

}
export default Blogoftopic;




function BlogPage({ topic }) {




  return <List topic={topic} isTopic={true}></List>

}


export async function getStaticProps(context) {
  const topic = context.params.topic;
  const title = topic;
  const keywords = `zeel codder ${topic}`;
  const description=`Find blog on topic ${title}`

  const data={title, keywords, topic,description}

  return {
    props: { data }
  }
}


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}
