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
import Imgshow from './imgshow'
import React from "react";
// import { useGlobalContext } from '../conte/xt';
// ====================================



const Technology = () => {

    const Info = ['HTML,CSS,JS', 'React js', 'Node js', 'Java', 'Python', 'C']
    const data=[
        {
        title:'HTML,CSS,JS',
        link:"#",
        imgurl:"https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
        },
        {
        title:'React js',
        link:"#",
        imgurl:"https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        },
        {
        title:'Node js',
        link:"#",
        imgurl:"https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/node-128.png"
        },
        {
        title:'Java',
        link:"#",
        imgurl:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-256.png"
        },
        {
        title:'Python',
        link:"#",
        imgurl:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png"
        },
        {
        title:'C',
        link:"#",
        imgurl:"https://media.istockphoto.com/photos/text-picture-id1149101430?b=1&k=6&m=1149101430&s=170667a&w=0&h=ujvWyCbwP1pFRAioL_RpioXd0oxFHL1Bobup9I9-iPs="
        },
        
        
        
    ]
    return (
        <div id="theology">
                <h1 style={{textAlign: 'center'}}>Technology</h1>
            <div className="box row" id="theology">
                {/* <img className="container-img" src='/images/home/tchnology.svg' alt='TheologyPhoto'></img> */}
                <Imgshow data={data}></Imgshow>  
            </div>
        </div>)
}

export default Technology;