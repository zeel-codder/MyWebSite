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
// import { useState } from 'react';
// import {Link} from 'react-router-dom';
// import { useHistory } from "react-router-dom";
import Introduction from '@Home/introduction';
import Education from './education';
import Technology from './tecnologes';
import Projects from './projects';
import Contact from './contect';
import React from "react";


// ====================================


function Main() {


  return (
      <>
        <div className="main1" id="home">
         
            <img src='/images/home/zeel.jpeg' className="logo" alt="Zeel"></img>
            <span className="logo-text" id="head">
              Hello, I am zeel codder
              <button className="btn" > 
              <a href="/Resume.pdf">
                
                Resume
                </a>
                </button>
            </span>
            
         
        </div>

        {/*  Main component's */}
        <section className="container mybox">
          
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
