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
                    My name is Zeel Sureshbhai Prajapati.I am pursuing B-tech Computer Science at Nirma University. I am a developer. I like to create websites. I have knowledge about React js, Next js, Node js, Flask like web frameworks or Libraries. I worked in full-stack as well as frontend projects. I am an open-source enthusiast. I work in Java, Python, Javascript, TypeScript like Languages. I am learning new things every day and keep growing every day.
                    </p>
                </div>
                    
            </div>
        </>
    )
}

export default Introduction;