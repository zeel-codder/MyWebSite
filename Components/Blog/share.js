// import '../styles/globals.css'
import React from "react";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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

      <a class="whatsup" title="whatsApp" href={`whatsapp://send?text=${title}`} data-action="share/whatsapp/share"
        target="_blank"> <WhatsAppIcon></WhatsAppIcon> </a>
      <a class="Linked" title="Linked" href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&source=https://zeelcodder.tech/`} data-action="share/whatsapp/share"
        target="_blank"> <LinkedInIcon></LinkedInIcon> </a>

        </div>
    </h2>
    )
}

export default MyApp
