/**
 This page all information about zeel-codder education info.

 @name:Education
 @type:React Component
 @param:none
 @returns: JSX of Education details
 @functionality : This Component is use to show Education info of zeel  website.
**/
import React from "react";


const Education = () => {
    return (
        <>
            <div className="box" id="education">
                <h1>Education</h1>

                <div className="text-container  error">
                    <img className="container-img" src='/images/home/education.svg' alt="Education Svg"></img>
                    <div>

                        <p className="para">
                            I did my 10th in Ankit vidyalaya, kalol, Gujarat in Gujarat Board. Then I finished my 12th in KTKM High School in Science branch. And presently , I am pursuing Computer science B-Tech in Nirma university.
                        </p>

                        <ul>



                        <li className="School para">

                            <b>KTKM High School, kalol, Gujarat — 12th Science
                                2018 - 2019</b>
                            <div className="Sub">

                                I got 99.23 PR in Gujarat bort in Science brach. I hold the first position
                                In kalol center in science brach.
                            </div>
                        </li>
                        <li className="School para">

                            <b> Nirma University, Ahmedabad, Gujarat — B-Tech CSE
                        2019 -2023</b>
                            <div className="Sub">

                            Presently I am pursuing B-Tech in Computer Science Technology with
                        80% marks
                            </div>
                        </li>
                       
                       
                        </ul>    

                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;