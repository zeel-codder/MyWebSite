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
import Brightness1Icon from '@material-ui/icons/Brightness1';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import {useState} from 'react'
// import { useGlobalContext } from '../context';
// ====================================




const Projects=()=>{


    const ProjectData=[
        {
            id:1,
            title:'My Introduction',
            technology:'React js',
            subtitle:'This projects is build on react js.',
            codelink:'https://github.com/zeel-codder/My_Introduction',
            link:'https://zeelcodder.tech/',
            
        },
        {
            id:2,
            title:'BookMarkStor',
            technology:'Html,Css and Js',
            subtitle:'This is used for Storing bookmark of website.',
            codelink:'https://github.com/zeel-codder/BookMarks',
            link:'https://mybookmarks1.netlify.app/',
            
        },
     
     ]

    //Store the open ul data
    const [arr,setarr]=useState([]);


    
    //=============================
    // @name:changeIndex
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used to show the Text of ul. It item in arr than it nested ul is display in screen other wise not.
    //=============================

    const changeIndex=(index)=>{
        // console.log(index)
        let new_arr=arr;
        if(new_arr.includes(index)){
            new_arr=new_arr.filter((index1)=>index1!==index);
        }else{
           new_arr.push(index);
        }
        // console.log([...new_arr])
        setarr([...new_arr]);
    }


    // console.log('rendee')
    return(
        <div id="projects">
        <h1>Projects</h1>
        <div className="box row" id="projects">
        {/* <div className="row"> */}

        {/* <img className="container-img" src='/images/home/project.jpg' alt="Project svg"></img> */}
        <div className="list-container">
        <ul className="project-ul"> 

           {
               ProjectData.map((d,index)=>{
                   let class1="not-show"
                   let class2=""
                   if(arr.includes(index)){
                       class1="show"
                       class2="rotetor"
                    }
                    
                    return (
                        <li key={d.id}  onClick={()=>changeIndex(index)}>
                   <p className="text">
                   <ArrowRightIcon className={class2}></ArrowRightIcon>  &nbsp;{d.title} , {d.technology}
                   </p>
                   <ul className={class1}>
                   <li><Brightness5Icon /> {d.subtitle}</li>
                   <li><Brightness5Icon /> Code Link: <a href={d.codelink} style={{padding:1 ,fontSize:'14px'}}>Code</a></li>
                   <li><Brightness5Icon /> Project Link: <a href={d.link} style={{padding:1,fontSize:'14px'}}>Link</a></li>
                   </ul>
                   </li>
                   )
                   
                })
            }
        </ul>
        </div>
        </div>
            {/* </div> */}
        </div>
    )
}
export default Projects;