/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:ImageShow
 * @type:React Component
 * @param:none
 * @returns:JSX of ImageShow component
 * @functionality : This Component is use to show img show on the screen.(Like 1->2->3->4->4)
 */



// Imports
// ====================================
import React from "react";
// import { useEffect } from 'react'
// import { useGlobalContext } from '../context';
// ====================================
import Image from "next/image";


const ImageShow = ({data}) => {


 


    return (
         <div  className="imgshow_div row" behavior="scroll" direction="right" >
            {
                data.map((Img, ImageIndex) => {
                    
                    const { title,imgurl, link } = Img;

                    //default all ImageDiv are next
                    
                    
                    return (
                        <div className={`column`} style={{margin:"0 1rem"}}>
                        <h1>{title}</h1>
                        {/* <img src={imgurl} key={ImageIndex} className="logo" alt="ImageShowImage" /> */}
                        <div className="imgeAnimationDiv">
                        {/* <img src={imgurl} key={ImageIndex}  alt="ImageShowImage" /> */}
                        <Image src={imgurl} key={ImageIndex}  alt="ImageShowImage"  width={400} height={400}/>
                        </div>
                        </div>
                      
                      )
                      
                    })
                }
           </div> 
          
    )
}

export default ImageShow;