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
import { useState } from 'react'
import React from "react";
// import { useEffect } from 'react'
// import { useGlobalContext } from '../context';
// ====================================


const ImageShow = ({data}) => {

    const ImageDic = [
        {
            id: 1,
            link: '/images/home/1.jpg'
        },
        {
            id: 2,
            link: '/images/home/2.jpg'

        }

    ]
    // console.log(data)/\

    const [index, setIndex] = useState(0)

 


    return (
         <div  className="imgshow_div row" behavior="scroll" direction="right">
            {
                data.map((Img, ImageIndex) => {
                    
                    const { title,imgurl, link } = Img;

                    //default all ImageDiv are next
                    
                    
                    return (
                        <div className={`column`}>
                        <h1>{title}</h1>
                        {/* <img src={imgurl} key={ImageIndex} className="logo" alt="ImageShowImage" /> */}
                        <div className="imgeAnimationDiv">
                        <img src={imgurl} key={ImageIndex}  alt="ImageShowImage" />
                        </div>
                        </div>
                      
                      )
                      
                    })
                }
           </div> 
          
    )
}

export default ImageShow;