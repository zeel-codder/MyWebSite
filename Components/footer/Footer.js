/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Footer
 * @type:React Component
 * @param:none
 * @returns:JSX of footer component.
 * @functionality : This Component is use to show Footer of website.
 */

// Imports
// ====================================
// import { AiOutlineFacebook , AiFillGithub ,AiFillLinkedin ,AiFillTwitterCircle } from 'react-icons/ai';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import React from "react";

// ====================================




const Footer = () => {
    return (
     

        <div className="footer-container">



            <div className="footer">
                <p className="footer-para">
                    All Copyright goes to © zeel prajapati
                </p>


                <ul className="footer-ul icons Footer-icons">
                    <li><a href="https://www.facebook.com/zeel.prajapati.3954/" title="Facebook" target="__blank"><FacebookIcon /></a></li>
                    <li><a href="https://github.com/zeel-codder" title="Github" target="__blank"><GitHubIcon /></a></li>
                    <li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin" target="__blank"><LinkedInIcon /></a></li>
                    <li><a href="https://twitter.com/zeelcoder" title="Twitter" target="__blank"><TwitterIcon /></a></li>
                </ul>
            </div>
        </div>
        
    )
}


export default Footer;