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
import Zoom from 'react-reveal/Zoom';

const ImageShow = ({data}) => {


 


    return (

           
      
         <div  className="imgshow_div" behavior="scroll" direction="right" >
            {
                data.map((Img, ImageIndex) => {
                    
                    const { title,imgurl, link } = Img;
                    
                    //default all ImageDiv are next
                    
                    
                    return (
                            <Zoom right>
                        <div className={`column`} >
                       👉 {title}
                    
                        </div>
                        </Zoom>
                      
                      )
                      
                    })
                }
           </div> 
        

     
    )
}

export default ImageShow;