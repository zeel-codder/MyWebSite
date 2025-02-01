/**
 * This page contains all information about Zeel's education and technology skills.
 *
 * @name: Technology
 * @type: React Component
 * @param: none
 * @returns: JSX of Technology details
 * @functionality: This component is used to show the technology skills of Zeel on the website.
 **/

// Imports
// ====================================
import Imgshow from "./imgshow";
import React from "react";

// ====================================

const Technology = () => {
  const Web = [
    {
      title: "Frappe",
    },
    {
      title: "React.js",
    },
    {
      title: "Next.js",
    },
    {
      title: "FastAPI",
    },
    {
      title: "Node.js",
    },
  ];

  const Languages = [
    {
      title: "Python",
    },
    {
      title: "JavaScript",
    },
    {
      title: "TypeScript",
    },
    {
      title: "Java",
    },
    {
      title: "C",
    },
  ];

  const Tools = [
    {
      title: "WordPress",
    },
    {
      title: "Git and GitHub",
    },
    {
      title: "DSA",
    },
  ];

  return (
    <div id="theology">
      <h1 style={{ marginBottom: "1rem" }}>Technology</h1>

      <div className="prow">
        <div className="imgshow_div">
          <h3>Frameworks</h3>
          <Imgshow data={Web}></Imgshow>
        </div>

        <div className="imgshow_div">
          <h3>Programming Languages</h3>
          <Imgshow data={Languages}></Imgshow>
        </div>

        <div className="imgshow_div">
          <h3>Other Tools</h3>
          <Imgshow data={Tools}></Imgshow>
        </div>
      </div>
    </div>
  );
};

export default Technology;
