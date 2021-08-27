/**
 This page all information about zeel-codder education info.

 @name:Technology
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Technology info of zeel in website.
**/


// Imports
// ====================================
// import { IoMdListBox } from 'react-icons/io'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const  Imgshow = loadable(() => import('./imgshow'))
import Imgshow from './imgshow'
import React from "react";
// import { useGlobalContext } from '../conte/xt';

// ====================================



const Technology = () => {

    // const Info = ['HTML,CSS,JS', 'React js', 'Node js', 'Java', 'Python', 'C']
    const Web=[
        {
        title:'HTML,CSS,JS',
       
        },
        {
        title:'React js',
        
        },
       
      
        {
            title:"next js",
          
        },
        {
            title:"Flask",
        
        },
        {
            title:'Node js',
            
        },
      
      
        
        
        
        
    ]
    
    const L=[
     
        {
            title:'Java',
          
            },
            {
            title:'Python',
          
            },
            {
                title:'TypeScript',
              
            },
            {
                title:'Javascript',
              
            },
            {
                title:'C',
              
            },


    ]
    const Tools=[
   
        {
            title:"DBMS",
        
        },
        {
            title:"MLOps",
        
        },
      


    ]
    return (
        <div id="theology">
                <h1 >Technology</h1>
            
            <div className="prow">

                {/* <img className="container-img" src='/images/home/tchnology.svg' alt='TheologyPhoto'></img> */}
               
              <div className="imgshow_div">
                  <h3>Web development</h3>


                <Imgshow data={Web} ></Imgshow> 
              </div  >
                
              <div className="imgshow_div">
                   <h3>Programming Language</h3>

                <Imgshow data={L}></Imgshow>  
              </div>
              <div className="imgshow_div"> 
                  <h3>Tools</h3>

                <Imgshow data={Tools}></Imgshow>  
              </div>
            </div>
            
        </div>)
}

export default Technology;