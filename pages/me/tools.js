import React from "react";
import Template from "@Layout/Template";
import ToolsData from "Data/project/tools";
import ChatBox from "Components/mychat";
import Zoom from "react-reveal/Zoom";
// import Link from 'next/link'
import Image from "next/image";

// import loadable from '@loadable/component'
// const   Template   = loadable(() => import('@Layout/Template'))
// const   Template   = loadable(() => import('@Layout/Template'))

export default function Tools() {
  const dic = {
    title: "Tools",
    keywords: "tools",
    description:
      "Project build by zeel-codder(zeel prajapati). Here you can find project on Python, Js, Next js , React js , Flask , Java etc. All are very use full projects. ",
  };

  return <Template Component={ToolList} data={dic}></Template>;
}

function ToolList() {
  return (
    <>
      <h1 style={{ margin: "2rem 0" }}>Some of my builds</h1>

      <div className="tools">
        {ToolsData.map((data) => {
          const {
            id,
            title,
            description,
            imgurl,
            codelink,
            link,
            technology,
            img,
          } = data;

          return (
            <Zoom>
              <div key={id} className="BlogShort">
                <div>
                  {/* <span className="title">{technology}</span> */}
                  <h5>{title}</h5>
                </div>

                {/* <img src={img} className="img" /> */}
                {img ? (
                  <Image
                    className="img"
                    src={img}
                    width={400}
                    height={200}
                    quality={100}
                  />
                ) : (
                  <img
                    className="img"
                    src={"/project.svg"}
                    width={400}
                    height={300}
                    quality={100}
                  />
                )}
                <div>
                  <div className="description">{description}</div>
                  <div>
                    {codelink && (
                      <div className="code">
                        <a href={codelink} target="_blank">
                          code
                        </a>
                      </div>
                    )}
                    {link && (
                      <div className="link">
                        <a href={link} target="_blank">
                          Web site
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div>
    </>
  );
}
