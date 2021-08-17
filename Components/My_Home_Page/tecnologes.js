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
    const data=[
        {
        title:'HTML,CSS,JS',
       
        },
        {
        title:'React js',
        
        },
        {
        title:'Node js',
        
        },
        {
        title:'Java',
      
        },
        {
            title:'C',
          
        },
        {
        title:'Python',
      
        },
        {
            title:"next js",
          
        },
        {
            title:"DBMS",
        
        },
        {
            title:"Flask",
        
        },
        {
            title:"",
        
        },

        
        
    ]
    return (
        <div id="theology">
                <h1 style={{textAlign: 'center'}}>Technology</h1>
            
                {/* <img className="container-img" src='/images/home/tchnology.svg' alt='TheologyPhoto'></img> */}
                <Imgshow data={data}></Imgshow>  
            
        </div>)
}

export default Technology;