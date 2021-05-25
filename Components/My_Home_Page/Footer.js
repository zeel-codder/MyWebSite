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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

// import { FaBeer } from 'react-icons/fa';
// ====================================




const Footer=()=>{
    return (
        <div className="footer">
            <p className="footer-para">
                All CopyRight &copy; zeel prajapati
            </p>
        <ul className="footer-ul icons Footer-icons">
        <li><a href="https://www.facebook.com/zeel.prajapati.397/" title="Facebook"><FacebookIcon /></a></li>
        <li><a href="https://github.com/zeel-codder" title="Github"><GitHubIcon /></a></li>
        <li><a href="https://www.linkedin.com/in/zeel-prajapati-4832971a3/" title="Linkedin"><LinkedInIcon /></a></li>
        <li><a href="https://twitter.com/ZeelPrajapati15"  title="Twitter"><TwitterIcon /></a></li>
        </ul>
    </div>
    )
}


export default Footer;