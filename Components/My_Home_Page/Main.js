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
import Introduction from "@Home/introduction";
import Education from "./education";
import Technology from "./tecnologes";
import Projects from "./projects";
import Contact from "./contect";
import React from "react";
import Carousel from "react-multi-carousel";

import Fade from "react-reveal/Fade";
import "react-multi-carousel/lib/styles.css";
// ====================================

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Main() {
  return (
    <>
      <Carousel responsive={responsive} infinite={true} autoPlay={false}>
        <div className="main1 intro-main1" id="home">
          <div className="text-box-one">
            <Fade top>
              <span className="logo-text" id="head">
                Hi 👋, I am Zeel 👩‍💻
              </span>
            </Fade>
            <Fade bottom>
              <span className="logo-texth">I am a foodie 🍔</span>
              <button className="btn">
                <a href="https://drive.google.com/file/d/1NQCxkmtmI-j2Zm71px-UIus5lKq44WvI/view?usp=sharing">
                  Resume
                </a>
              </button>
            </Fade>
          </div>
        </div>

        <div className="main1" id="home">
          <iframe
            className="logo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/jlHgwiLKkyw?si=y8Ap47N3KoVBuQiI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="text-box-one">
            <Fade bottom>
              <span className="logo-texth">Sometimes I Code 💻</span>
            </Fade>
          </div>
        </div>

        <div className="main1" id="home">
          <iframe
            className="logo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/f74uomS_BE8?si=IAniJe6L-s6_t9Nx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="text-box-one">
            <Fade bottom>
              <span className="logo-texth">Sometimes I Talk 🗣️</span>
            </Fade>
          </div>
        </div>

        <div className="main1" id="home">
          <iframe
            className="logo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DCCftKYPLaE?si=rkuMZGJVX0X95Evx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <div className="text-box-one">
            <Fade bottom>
              <span className="logo-texth">Sometimes I Travel ✈️</span>
            </Fade>
          </div>
        </div>
      </Carousel>

      {/*  Main component's */}
      <section className="container mybox">
        <Introduction id="introduction" />
        {/* <Education /> */}
        <Technology />
        <Projects />
        {/* <Contact></Contact> */}
      </section>
    </>
  );
}

export default Main;
