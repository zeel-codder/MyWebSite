/**
 @name:BlogShort
 @type:React Component
 @param:props
 @returns: JSX of BlogShort.
 @functionality : This Component is used in Blog Component. This is used to display blog basic details on the screen.
**/

// Imports
// ====================================

import React from "react";
import Like from "./Like";
import Link from "next/link";
import { WebLink } from "@const/List";
import Image from "next/image";
import Zoom from "react-reveal/Zoom";

const BlogShort = (props) => {
  const { name, title, img, url, link, topic, id, summery } = props;

  return (
    <>
      <a
        href={`${WebLink}/blog/${name}`}
        className="BlogShort"
        data-interception="off"
      >
        <div className="imgdiv">
          <Image src={img} layout="fill" alt="BlogShort Img" />
        </div>
        <Zoom>
          <div className="BlogInformation" key={id}>
            <span className="Blogtitle">{title}</span>
            <p>{summery}</p>

            {/* <Like blogInfo={props} isBlogShort={true}></Like> */}
            {/* <button className="btn">Read */}
            {/* </button> */}
          </div>
          <span className="tech">{topic}</span>
        </Zoom>
      </a>
    </>
  );
};

export default BlogShort;
