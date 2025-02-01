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
// import Brightness1Icon from '@material-ui/icons/Brightness1';
// import Brightness5Icon from '@material-ui/icons/Brightness5';
// import ArrowRightIcon from '@material-ui/icons/ArrowRight';
// import BookmarkIcon from '@material-ui/icons/Bookmark';
// import {useState} from 'react'
import React from "react";
import { WebLink } from "@const/List";
import Link from "next/link";
import Image from "next/image";
// import { useGlobalContext } from '../context';
import P from "@Data/project/tools";
// import ScrollAnimation from 'react-animate-on-scroll';
import Zoom from "react-reveal/Zoom";
// ====================================

const Projects = () => {
  const ProjectData = P.slice(0, 3);

  return (
    <>
      <div id="projects">
        <h1>Projects</h1>
        <div className="tools" style={{ width: "100%" }}>
          {ProjectData.map((data) => {
            const {
              id,
              title,
              description,
              imgurl,
              codelink,
              link,
              technology,
              img,
            } = data;

            return (
              <Zoom>
                <div key={id} className="BlogShort">
                  <div>
                    {/* <span className="title">{technology}</span> */}
                    <h5>{title}</h5>
                  </div>

                  {/* <img src={img} className="img" /> */}
                  {img ? (
                    <Image
                      className="img"
                      src={img}
                      width={400}
                      height={200}
                      quality={100}
                    />
                  ) : (
                    <img
                      className="img"
                      src={"/project.svg"}
                      width={400}
                      height={300}
                      quality={100}
                    />
                  )}
                  <div>
                    <div className="description">{description}</div>
                    <div>
                      {codelink && (
                        <div className="code">
                          <a href={codelink} target="_blank">
                            code
                          </a>
                        </div>
                      )}
                      {link && (
                        <div className="link">
                          <a href={link} target="_blank">
                            Web site
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Zoom>
            );
          })}
        </div>
        <div className="BlogShort btn-bg">
          <div className="code btn-more pointer">
            <Link href={`${WebLink}/me/tools`}>Find More 👑</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
