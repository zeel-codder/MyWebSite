import React,{useEffect,useState} from 'react'
// import { DiscussionEmbed } from 'disqus-react';




export default function mychat({key1}) {

    // console.log('call')
    const [link,setLink]=useState('');
    // const [width,setLink]=useState('');

    useEffect(()=>{

        setLink(window.location.href);

    });


    return (
        <div id="layout" data-tracking-area="layout">
            {/* <h1>Comment box</h1> */}
       
        

<div className="fb-comments" data-href={`${link}`} data-colorscheme="light"  data-width="100%" data-numposts="10"></div>

     
        </div>
    )
}
