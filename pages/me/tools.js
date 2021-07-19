import React from "react";
// import Template from '@Layout/Template'
import ToolsData from 'Data/project/tools'
// import Link from 'next/link'
import Image from "next/image";

import loadable from '@loadable/component'
const   Template   = loadable(() => import('@Layout/Template'))
// const   Template   = loadable(() => import('@Layout/Template'))


export default function Tools() {

  const dic={title:"Tools",keywords:"tools",description:"Project build by zeel-codder(zeel prajapati). Here you can find project on Python, Js, Next js , React js , Flask , Java etc. All are very use full projects. "}

  return (
    <Template Component={ToolList} data={dic}></Template>
  )
}

function ToolList(){
  return (
      
      <div className="blog-container tools">
        <h1>Zeel Codder's Projects</h1>
        {
          ToolsData.map((data)=>{
            const {id, title, description,imgurl,codelink,link, technology,img}=data;
            
            return(
              <div key={id} className="BlogShort">
                <div>
                <span className="title">{technology}</span>
                <h1>{title}</h1>
                </div> 

              

                <img src={img} className="img" />
                {/* <Image  className="img" src={img}  width={1000} height={400} quality={100} /> */}
                <div>
                <div className="description">{description}</div>
                <div>
                
                {
                  codelink 
                  &&
                  <div className="code"><a href={codelink}>code</a></div>
                }
                {
                  link
                  &&
                  <div className="link"><a href={link}>Web site</a></div>

                }

                
                </div>
                </div>
              
            </div>

             )

        })
        }
      </div>
  )
}

