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
                <img className="container-img" src="/images/home/introduction.svg" alt="Introduction Svg"></img>
                {/* <img className="container-img" src="/images/home/introduction.svg" alt="Introduction Svg"  width={1200} height={400} /> */}
                 
                    <p className="para">
                    My name is Zeel Sureshbhai Prajapati.I am living in kalol, Gujarat. Presently, I am pursuing Computer Science at Nirma University. I am love to code. I am do competitive programming and using java for competitive programming.  I am open source enthusiastic   Javascript is my favorite language.  I done projects web development. I have knowledge about  Python ,C and C++ like languages. I  love to learn new things everyday.
                    </p>
                </div>
                    
            </div>
        </>
    )
}

export default Introduction;