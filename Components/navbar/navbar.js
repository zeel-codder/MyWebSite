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
import Link from 'next/link'
// import React from "react";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import React, { useState, useRef, useEffect } from 'react';
import Login from '../UserLoging/Login'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
// ====================================



function Navbar() {


    let value = useRef(true);
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
        document.querySelector(".icon").classList.toggle("rotetor");
        setLinkopen(!showLinks);
    }

    //=============================
    // @name:ShowLogin
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used add Login Component in Web Site.
    //=============================

    // const ShowLogin = (data) => {
    //     // console.log(data.textContent);
    //     value.current = data.textContent;
    //     setIsLoginOpen(true);

    // }

    //=============================
    // @name:closeLogin
    // @type:Javascript Function
    // @param:none
    // @return:none
    // @functionality: Function is used remove Login Component in Web Site.
    //=============================

    const closeLogin = () => {
        setIsLoginOpen(false);
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

            const linksHeight = linksRef.current.getBoundingClientRect().height;
            // const linksHeight1 = linksRefs.current.getBoundingClientRect().height;
            if (showLinks) {
                linksContainerRef.current.style.height = `${linksHeight + 40}px`;
            } else {
                linksContainerRef.current.style.height = '0px';
            }
        } else {
            first.current = false
        }
        setUser(JSON.parse(localStorage.getItem('User')))
        // console.log('cc')
    }, [showLinks])


    return (
        <div className="navbar">
            <div className={`icon`} onClick={NavbarDisplay}> <ViewWeekIcon ></ViewWeekIcon ></div>
            <div className="navbar-item" ref={linksContainerRef}>

                <ul className="navabar-ul" ref={linksRef}>
                    <img src='/images/home/zeel.jpeg' className="logo" alt="Zeel"></img>
                    <div>

                        <li className="a">

                            <Link href='/'>

                                Zeel Codder Blogs


                            </Link>
                        </li>
                        <li>

                            <Link href='/me/zeel'>

                                About Me

                            </Link>
                        </li>
                        <li>

                            <Link href='/me/tools'>

                                Tools
                            </Link>
                        </li>
                    </div>




                    <li className="Login-Page" ref={linksRefs}>

                        {
                            !User
                                ?
                                <>
                                    <li className="login">

                                       <Link href='/auth/singup'
                                            title="Sing Up">Sing Up</Link>
                                    </li>
                                    <li className="login"><Link href='/auth/login' title="Log In">Log In</Link></li>
                                </>
                                :
                                <li className="icons">
                                    
                                    <Link href={`/user/${User?.name}`} title="User">
                                    
                                        <AccountCircleIcon className="user" />
                                    </Link>
                                    
                                    <Link href={`/user/${User?.name}`} title="User">
                                    
                                    {User.result.username}    
                                    
                                    </Link>
                                    
                                    <a title="Logout"
                                        onClick={() => {
                                            localStorage.removeItem('User');
                                            setUser(null);
                                        }}
                                    >
                                    
                                        Logout
                                    </a>
                                    
                                </li>
                        }
                    </li>
                </ul>
                {/* {
                    isLoginOpen && <Login choice={value.current} closeLogin={closeLogin}></Login>

                } */}
            </div>
        </div>

    );
}

export default Navbar;