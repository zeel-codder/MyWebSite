/**
 @name:MainPageButton
 @type:React Component
 @param:none
 @returns: JSX of MainPageButton of User details
 @functionality : This Component Add addition functionality in web site. Like goto dark mode, goto Top of the window.
**/



// Imports
// ====================================
import { useEffect, useState } from 'react';
import { BiLeftTopArrowCircle } from 'react-icons/bi';
import { CgDarkMode } from 'react-icons/cg';
import { DiOpensource } from 'react-icons/di';
import React from "react";
// ====================================


function MainPageButton() {

  // UseState is define for Main page iCONS ARE OPEN OR NOT.
  const [isOpen, setIsOpen] = useState(false);
  
  
  //=============================
  // @name:useEffect
  // @type:React Hook UseEffect
  // @param:none
  // @return:none
  // @functionality: UseEffect is used Make sour that icons are display or not. 
  //=============================

  useEffect(() => {

    const GOTO = document.querySelector('.Goto_top');
    const Bottom = document.querySelector('.bottom');
   

    if (isOpen && GOTO) {
      GOTO.classList.toggle('Goto_top-show');
      Bottom.classList.toggle('bottom-show');
    
    }


  }, [isOpen])



  return (
    <div className="MainPageButton" >

      <BiLeftTopArrowCircle className="Goto_top" onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}></BiLeftTopArrowCircle>
      <BiLeftTopArrowCircle className="Goto_top bottom" onClick={() => {
        window.scrollTo({ top: document.querySelector("#__next").offsetHeight, behavior: 'smooth' })
      }}></BiLeftTopArrowCircle>

      {/* <CgDarkMode className="DarkMode" onClick={() => {

        document.querySelector("body").classList.toggle("dark");
        const form = document.querySelector(".form");
        form !== null && form.classList.toggle("light-dark");


      }}></CgDarkMode> */}

      <DiOpensource className="Icon" onClick={() => setIsOpen(!isOpen)}></DiOpensource>
    </div>
  );
}

export default MainPageButton;
