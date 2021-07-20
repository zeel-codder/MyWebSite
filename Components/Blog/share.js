// import '../styles/globals.css'
import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useEffect, useState } from "react";

function MyApp({ title }) {

  // console.log(data)
  const [url, seturl] = useState('/')

  useEffect(() => {
    seturl(window.location.href)
    // console.log(window)

  }, [])
  return (

    <h2 className="Like Share">Share:

      <div className="row">

        <a className="whatsup" title="whatsApp" href={`whatsapp://send?text=${title} 
      \n
      Like:${url}
      `} data-action="share/whatsapp/share"
          target="_blank"> <WhatsAppIcon></WhatsAppIcon> </a>

        <a className="Linked" title="Linked" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=https://zeelcodder.tech/`} data-action="share/whatsapp/share"
          target="_blank"> <LinkedInIcon></LinkedInIcon> </a>

        <a className="Linked" title="Facebook" href={`https://www.facebook.com/sharer/sharer.php?u=https://zeelcodder.tech/`} target="_blank">
          <FacebookIcon></FacebookIcon>
    
        </a>
      <a className="Linked" title="Facebook" href={`http://twitter.com/share?text=${title}&url=${url} &hashtags=#codding #zeel-codder`} target="_blank">
        <TwitterIcon></TwitterIcon>
      </a>
    </div>
    </h2 >
    )
}

export default MyApp
