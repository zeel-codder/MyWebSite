import React from "react";
import loadable from '@loadable/component'
import axios from "axios";
import { WebLink } from "@const/List";
// import Loadable from 'react-loadable';
// const Template  = Loadable({
// 	loader: () => import('@Layout/Template'),
// 	loading() {
// 		return <div>Loading...</div>
// 	}
// })
const Template = loadable(() => import('@Layout/Template'))
const List=loadable(()=>import('@Blog/listBlog'))





export default function Home({Data}) {

  const dic = { title: "Zeel Codder Blogs", keywords: "zeel codder blog,html", isShoWList: true , description:"zeel-codder web site for programmer and student. the web site where you find blog on demanding technology. Read and make you life good."
  ,Data
}

  return (
    <div>
      <Template Component={List} data={dic}></Template>
    </div>
  )
}

export async function getStaticProps(context) {
  let data = await axios.get(WebLink + '/api/blog/blog')
  .then((res) => {

      return res.data;
  })
  .catch((err) => { return; })

  return {
    props: { Data  : data}
  }
}




