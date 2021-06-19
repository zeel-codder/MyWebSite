import React from "react";
import loadable from '@loadable/component'
// import Loadable from 'react-loadable';
// const Template  = Loadable({
// 	loader: () => import('@Layout/Template'),
// 	loading() {
// 		return <div>Loading...</div>
// 	}
// })
const Template = loadable(() => import('@Layout/Template'))
const List=loadable(()=>import('@Blog/listBlog'))





export default function Home() {

  const dic = { title: "Zeel Codder Blogs", keywords: "zeel codder blog,html", isShoWList: true }

  return (
    <div className="bg">
      <Template Component={List} data={dic}></Template>
    </div>
  )
}

