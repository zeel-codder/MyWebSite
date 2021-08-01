/**
 This page all information about zeel-codder education info.

 @name:Projects
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Project info of zeel in website.
**/


// Imports
// ====================================
// import {IoIosArrowDroprightCircle} from 'react-icons/io'
// import {FaRegHandPointRight} from 'react-icons/fa'
// import Brightness1Icon from '@material-ui/icons/Brightness1';
// import Brightness5Icon from '@material-ui/icons/Brightness5';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import {useState} from 'react'
import React from "react";
import { WebLink } from '@const/List';
import Link from 'next/link';
import Image from "next/image";
// import { useGlobalContext } from '../context';
import P from '@Data/project/tools'
// ====================================




const Projects=()=>{


    const ProjectData=P.slice(0,2);

    
    return(
        <div id="projects">
        <h1>Projects</h1>
        <div className="box row" id="projects">
        {/* <div className="row"> */}

        {/* <img className="container-img" src='/images/home/project.jpg' alt="Project svg"></img> */}
        <div className="tools" >
     

           {
               ProjectData.map((data,index)=>{

                const {id,technology,description,codelink ,link,title,img}=data
  
                return (

                <div key={id} className="BlogShort" >
                <span className="title">{technology}</span>
              

                <div>
                <h1>{title}</h1>
                
                {/* <img src={img} className="img" /> */}
                
                {

                    img 
                    &&
                
                <Image src={img} className="img" width={1000} height={400} quality={100} />
                }
                <div className="description">{description}</div>
                <div>
                
                {
                    codelink 
                  &&
                  <div className="code"><Link href={codelink}>code</Link></div>
                }
                {
                    link
                    &&
                    <div className="link"><Link href={link}>Web site</Link></div>
                    
                }

                
                </div>
                </div>
              
            </div>
                )
                })
            }
        {/* </ul> */}
        <div className="code">
            <Link href={`${WebLink}/me/tools`}>More Projects</Link>
        </div>
        </div>
        </div>
            {/* </div> */}
        </div>
    )
}
export default Projects;