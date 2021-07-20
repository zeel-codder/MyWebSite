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
import Like from './Like'
import Link from 'next/link'
import { WebLink } from '@const/List';
import Image from 'next/image'


const BlogShort = (props) => {

    const { name, title, img, url, link, topic,id,summery } = props;

    return (
        <>
            <div className="BlogShort">
            
            <span className="title">{topic}</span>
              
                <div className="imgdiv">
                <Image src={img} layout="fill" alt='BlogShort Img'   />
                </div>    
                <div className="BlogInformation" key={id}>
                    <span className="Blogtitle">{title}</span>
                    <p>{summery}</p>
                    
                <Like blogInfo={props} isBlogShort={true}></Like>
                    <Link href={`${WebLink}/blog/${name}`} className="blog-a" data-interception='off'>
                        <button className="btn">Read
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogShort;