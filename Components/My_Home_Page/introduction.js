/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Introduction
 * @type:React Component
 * @param:none
 * @returns:JSX of Introduction component
 * @functionality : This Component is use to show Introduction Info of zeel-codder
 */
import React from "react";
//  import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="box" name="introduction">
        <h1>Introduction</h1>
        <div
          className="text-container"
          style={{ textAlign: "center", width: "70%" }}
        >
          <p className="para" style={{ textAlign: "center" }}>
            Hi! I'm Zeel! 👋 I love coding 💻 and exploring new places ✈️. Solo
            travel 🗺️ is my favorite way to discover different cultures 🌍 and
            experience what the world has to offer. ✨
          </p>
        </div>
      </div>
    </>
  );
};

export default Introduction;
