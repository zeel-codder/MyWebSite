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
// import Like from './Like';
import { useState } from 'react';
import { WebLink } from '@const/List';
import Like from '@Blog/Like';

// ====================================


const BlogShort = (props) => {



    return (
        <>
            <div className="BlogShort Loaddic">
            
            <span className="title Load span5"></span>
                <div  className="Load span1">
                <span  alt='BlogShort Img' />
                </div>    
                <div className="BlogInformation">
                <span className="Blogtitle Load span2"></span>
                    {/* <h2 style={{textAlign:'center'}}><FcLike /> {like}</h2> */}
                <div className="span3 Load"></div>
        
                <div className="span4 Load"></div>
                </div>
        
            </div>
        </>
    )
}

export default BlogShort;