/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Navbar
 * @type:React Component
 * @param:none
 * @returns:JSX of Navbar component
 * @functionality : This Component is Navbar of  zeel-codder web site.
 */



// Imports
// ====================================
// import Link from 'next/link'
// import React from "react";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import React, { useState, useRef, useEffect } from 'react';

import CancelIcon from '@material-ui/icons/Cancel';
// import Login from '../UserLoging/Login'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// ====================================



function Navbar() {


    // let value = useRef(true);
    const linksRef = useRef(null);
    const linksRefs = useRef(null);
    const first = useRef(true);
    const linksContainerRef = useRef(null);
    // const user=
    const [showLinks, setLinkopen] = useState(false);
    const [User, setUser] = useState(null);
    // const [nam, setUser] = useState(null);
    // const [isLoginOpen, setIsLoginOpen] = useState(false);

    // const { UserState, Login } = useGlobalContext();

    // console.log(Userstate);

    //=============================
    // @name:NavbarDisplay
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used add rotetor class in icon and add the height in navbar link. ====>More this Function is Used in Mobile responsive navbar<=====
    //=============================

    const NavbarDisplay = () => {
        // document.querySelector(".icon").classList.toggle("rotetor");
        setLinkopen(!showLinks);
    }

    


    //=============================
    // @name:useEffect
    // @type:React Hook UseEffect
    // @param:none
    // @return:none
    // @functionality: UseEffect is set Heigh of Navbar-ul in Mobile View.
    //=============================

    useEffect(() => {
        // console.log(isLoginOpen, 1);
        if (!first.current) {

            // const linksHeight = linksRef.current.getBoundingClientRect().height;
            // const linksHeight1 = linksRefs.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.classList.add('navshow')
                // linksContainerRef.current.style.height = `${linksHeight + 40}px`;
            } else {
                linksContainerRef.current.classList.remove('navshow')
                // linksContainerRef.current.style.height = '0px';
            }
        } else {
            first.current = false
        }
        setUser(JSON.parse(localStorage.getItem('User')))
        // console.log('cc')
    }, [showLinks])


    return (
        <>
            <div className={`icon nav-icon`} > 
            
            <span onClick={NavbarDisplay}>
    
            
            {
                showLinks
                ?
                <CancelIcon />
                :
            <ViewWeekIcon ></ViewWeekIcon >
            }
            
            </span>
            </div>
        <div className="navbar">
            <div className="navbar-item" ref={linksContainerRef}>

                <ul className="navabar-ul" ref={linksRef}>
                    <img src='/images/home/zeel.jpeg' className="logo" alt="Zeel"></img>
                    <div>

                        <li className="a">

                            <a href='/'>

                                Zeel Codder Blogs


                            </a>
                        </li>
                        <li>

                            <a href='/me/zeel'>

                                About Me

                            </a>
                        </li>
                        <li>

                            <a href='/me/tools'>

                                Tools
                            </a>
                        </li>
                    </div>




                    <li className="Login-Page" ref={linksRefs}>

                        {
                            !User
                            ?
                            <>
                                    <div className="login">

                                       <a href='/auth/singup'
                                            title="Sing Up">Sing Up</a>
                                    </div>
                                    <div className="login"><a href='/auth/login' title="Log In">Log In</a></div>
                                </>
                                :
                                <div className="icons">
                                    <div style={{display:"flex",flexDirection:"row"}}>
                                    <a href={`/user/${User?._id}`} title="User">
                                    {/* <> */}
                                        {/* <AccountCircleIcon className="user" /> */}
                                
                                    
                                    {User.username}    
                                    {/* </> */}
                                    
                                    </a>
                                    </div>    
                                    
                                    <a title="Logout"
                                        onClick={() => {
                                            localStorage.removeItem('User');
                                            setUser(null);
                                        }}
                                        >
                                    
                                        Logout
                                    </a>
                                    
                                </div>
                        }
                    </li>
                </ul>
                {/* {
                    isLoginOpen && <Login choice={value.current} closeLogin={closeLogin}></Login>
                    
                } */}
            </div>
        </div>

        </>
    );
}

export default Navbar;