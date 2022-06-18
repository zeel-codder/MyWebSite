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
                <div className="text-container">
                {/* <img className="container-img" src="/images/home/introduction.svg" alt="Introduction Svg"></img> */}
                {/* <img className="container-img" src="/images/home/introduction.svg" alt="Introduction Svg"  width={1200} height={400} /> */}
                 
                    <p className="para">
                    I work on a team as well as on individual projects. I am a quick learner who loves to learn new things and share ideas with the world. As an experience, I work on many freelance projects and one internship. I work in MERN stack, Django, and flask. Also, I am very consistent in my work.
                    </p>
                </div>
                    
            </div>
        </>
    )
}

export default Introduction;