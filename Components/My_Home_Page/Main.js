/* eslint-disable jsx-a11y/alt-text */
/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Main
 * @type:React Component
 * @param:none
 * @returns:JSX of Main component
 * @functionality : This Component is Main page of zeel-codder web site. which Combine the      Introduction,Education,Project and Technology Info
 */


// Imports
// ====================================
// import { useGlobalContext } from '../context';
// import { useEffect } from 'react';
import { useState } from 'react';
// import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Introduction from 'Components/My_Home_Page/introduction';
import Education from './education';
import Technology from './tecnologes';
import Projects from './projects';
import Contact from './contect';
import React from "react";

// ====================================


function Main() {


  const [HeightArr, setHeighArr] = useState([]);
  let history = useHistory();
  // console.log(useGlobalContext())


  //=============================
  //Line Animation AddLine Function:
  // @name:AddLine
  // @type:Javascript Function
  // @param:scroll event as e
  // @return:none
  // @functionality: Function is used to Set the Scroll animation on .box div
  //=============================

  function ScrollAnimtion(e) {
    const arr = document.querySelectorAll(".box");
    const WindowsBottom = window.scrollY + window.innerHeight;
    arr.forEach((box) => {
      const Box = box.offsetTop + box.offsetHeight / 7;
      if (Box < WindowsBottom) {
        box.classList.add("box-show");
      }
    })
  }


  //=============================
  //Line Animation AddLine Function:
  // @name:AddLine
  // @type:Javascript Function
  // @param:none
  // @return:none
  // @functionality: Function is used to add horizontal line div in .main1 container in html
  //=============================

  
  function AddLine() {

    let height = document.querySelector(".main1").offsetHeight/2;
    let HeightArr = [];
    for (let i = 0; i < 20; i++) {
      HeightArr.push(Math.random() * (height)+height);
    }
    let list=document.querySelectorAll('.line');
    list.forEach((data)=>{
      data.style.height = `${height}px`;
      const cout=Math.floor(Math.random()*3+1);
      // console.log(data);
      const block='<div class="block1">';
      for(let i=0;i<cout;i++){
        data.innerHTML=data.innerHTML+block;
      }
    });
    setHeighArr(HeightArr);
    // console.log(HeightArr);

  }


   //=============================
  //Line Animation AddLine Function:
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used to add Scroll Event in Windows, Call AddLine Functions,
  // Than set the height of all .Line in .main1 container  
  //=============================

  // useEffect(() => {
  //   // window.addEventListener("scroll", ScrollAnimtion);
  //   // AddLine();
  //   setInterval(()=>{

  //     // let height = document.querySelector(".main1");
  //     // if(height!=null){
  //     //   height=height.offsetHeight;
  //     // }
  //     // // offsetHeight;
  //     // let list=document.querySelectorAll('.line');
  //     // list.forEach((data)=>{
  //     //   data.style.height = `${height}px`;

  //     // })
  //   },5000)
  // }, [])



  // console.log(HeightArr);

  return (
      <>
        <div className="main1" id="home">
         
            <img src='/images/home/zeel.jpeg' className="logo" alt="Zeel"></img>
            <span className="logo-text" id="head">
              Zeel Codder Personal Web Site
              <button className="btn" > 
              <a href="/Resume.pdf">
                
                Resume
                </a>
                </button>
            </span>
            
         
        </div>

        {/*  Main component's */}
        <section className="container">
          
          <Introduction id="introduction"/>
          <Education />
          <Technology />
          <Projects />
          <Contact></Contact>
        </section>
        </>
  );
}

export default Main;
