import React from "react";
import loadable from '@loadable/component'
const Template = loadable(() => import('@Layout/Template'))
const List=loadable(()=>import('@Blog/listBlog'))





export default function Home() {

  const dic = { title: "zeel codder blogs", keywords: "zeel codder blog,html", isShoWList: true }

  return (
    <div className="bg">
      <Template Component={List} data={dic}></Template>
    </div>
  )
}

