import React from "react";
import Template from '@Layout/Template'
import ToolsData from 'Data/project/tools'
import Link from 'next/link'


export default function Tools() {

  // const dic={data}

  return (
    <Template Component={ToolList}></Template>
  )
}

function ToolList(){
  return (
      
      <div className="ListOfBlogs blog-container tools">
        <h1>Zeel Codder's Projects</h1>
        {
          ToolsData.map((data)=>{
            const {id, title, description,imgurl,codelink,link, technology}=data;
            
            return(
              <div key={id} className="BlogShort">
                <span className="title">Technology:{technology}</span>
              

                <div>
                <h1>{title}</h1>
                <div className="description">{description}</div>
                <div>

                <div className="code"><Link href={codelink}>code</Link></div>
                <div className="link"><Link href={link}>Web site</Link></div>

                
                </div>
                </div>
              
            </div>

             )

        })
        }
      </div>
  )
}

