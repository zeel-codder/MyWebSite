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
import { Link } from "react-scroll";
// import MyLink from 'next/link'
// import React from "react";
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import React, { useState, useRef, useEffect } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';

// ====================================



function Navbar({data}) {

    // let value = useRef(true);
    const linksRef = useRef(null);
    // const linksRefs = useRef(null);
    const first = useRef(true);
    const linksContainerRef = useRef(null);

    const [showLinks, setLinkopen] = useState(false);
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

    // const closeLogin = () => {
    //     setIsLoginOpen(false);
    // }


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
        // setUser(JSON.parse(l/ocalStorage.getItem('User')))
        // console.log('cc')
    }, [showLinks])

    return (
        <>
        <div className={`icon nav-icon`} > 
            
        <span onClick={NavbarDisplay} >

        
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
            {/* <div className={`icon`} onClick={NavbarDisplay}> <ViewWeekIcon ></ViewWeekIcon ></div> */}
            <div className="navbar-item" ref={linksContainerRef}>
                
                <ul className="navabar-ul" ref={linksRef}>
                    <div>

                        {
                            data.map((data) => {
                                const { id, title, link } = data
                                return (
                                    <li key={id}>
                                        <Link to={link} title={title}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                            {title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                    <li>
                        <a href="/">My Blog</a>
                    </li>
                    </ul>
            </div>
        </div>

                        </>
    );
}

export default Navbar;