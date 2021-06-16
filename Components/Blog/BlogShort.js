/**
 @name:BlogShort
 @type:React Component
 @param:props
 @returns: JSX of BlogShort.
 @functionality : This Component is used in Blog Component. This is used to display blog basic details on the screen.
**/


// Imports
// ====================================

// import {FcLike} from 'react-icons/fc';
// import {useGlobalContext} from '../context';
import Link from 'next/link'
import React from "react";
import loadable from '@loadable/component'
// import Like from './Like';
const Like = loadable(() => import('./Like'))
// import { useState } from 'react';
import { WebLink } from '@const/List';

// ====================================


const BlogShort = (props) => {

    const { name, title, img, url, link, topic,id } = props;
    // const WebLink="null"
    // console.log(WebLink)



    return (
        <>
            <div className="BlogShort">
            
            <span className="title">{topic}</span>
                <div>
                <img src={img} alt='BlogShort Img' />
                </div>    
                <div className="BlogInformation" key={id}>
                    <span className="Blogtitle">{title}</span>
                    {/* <h2 style={{textAlign:'center'}}><FcLike /> {like}</h2> */}
                <Like blogInfo={props} isBlogShort={true}></Like>
                    <Link href={`${WebLink}/blog/${name}`} className="blog-a">
                        <button className="btn">Read
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BlogShort;