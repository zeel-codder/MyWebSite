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

                <div className="text-container row error">
                <img className="container-img" src='/images/home/education.svg' alt="Education Svg"></img>
                    <div className="column">

                    <p className="para">
                        I did my 10th in Ankit vidyalaya, kalol, Gujarat in Gujarat Board. Then I finished my 12th in KTKM High School in Science branch. And presently , I am pursuing Computer science B-Tech in Nirma university.
                    </p>
                    <table>

                        <thead>
                            <td>Collage/school  name</td>
                            <td>Percentile rank/SPI</td>
                            <td>Compilation data</td>
                            <td>Location</td>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Ankit vidyalaya
                                </td>
                                <td>
                                    99.12 PR
                                </td>
                                <td>
                                    2017
                                </td>
                                <td>
                                    kalol, Gujarat
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    KTKM High School
                                </td>
                                <td>
                                    99.27 PR
                                </td>
                                <td>
                                    2019
                                </td>
                                <td>
                                    kalol, Gujarat
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Nirma University
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    2023
                                </td>
                                <td>
                                    Ahmadabad, Gujarat
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                    </div>
            </div>
        </>
    )
}

export default Education;