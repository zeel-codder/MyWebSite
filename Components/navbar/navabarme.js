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
import MyLink from 'next/link'
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
   

    const NavbarDisplay = () => {
        // document.querySelector(".icon").classList.toggle("rotetor");
        setLinkopen(!showLinks);
    }

    

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
         <div className="center bg">
                <img src='/logo.svg' alt='log' />

            </div>
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
                        <MyLink href="/">My Blog</MyLink>
                    </li>
                    </ul>
            </div>
        </div>

                        </>
    );
}

export default Navbar;