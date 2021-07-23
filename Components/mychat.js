import React,{useEffect,useState} from 'react'
// import { DiscussionEmbed } from 'disqus-react';




export default function mychat({key1}) {

    console.log('call')
    const [link,setLink]=useState('');
    // const [width,setLink]=useState('');

    useEffect(()=>{

        setLink(window.location.href);

    });



    // useEffect(()=>{
    //     var disqus_config = function () {
    //         this.page.url = window.location.href; 
    //         this.page.identifier = '${key1}'; 
    //         };
    //         (function() { 
    //             var d = document, s = d.createElement('script');
    //             s.src = 'https://https-zeelcodder-tech.disqus.com/embed.js';
    //             s.setAttribute('data-timestamp', +new Date());
    //             (d.head || d.body).appendChild(s);
    //             })();
                             
                

    // })
    return (
        <div id="layout" data-tracking-area="layout">
            <h1>Comment box</h1>
        {/* <div id="disqus_thread"></div> */}
        {/* <script dangerouslySetInnerHTML={{__html:    
            `var disqus_config = function () {
            this.page.url = window.location.href; 
            this.page.identifier = '${key1}'; 
            };
            
            (function() { 
              var d = document, s = d.createElement('script');
              s.src = 'https://https-zeelcodder-tech.disqus.com/embed.js';
              s.setAttribute('data-timestamp', +new Date());
              (d.head || d.body).appendChild(s);
              })();
              this.callbacks.onReady = [function() {
                resizeIframeWidth($('#disqus_thread iframe'));
            }];
            
            function resizeIframeWidth(e){
               
                if (e.Document && e.Document.body.scrollWidth) 
                    e.width = e.contentWindow.document.body.scrollWidth;
                else if (e.contentDocument && e.contentDocument.body.scrollWidth) 
                    e.width = e.contentDocument.body.scrollWidth + 35;
                else (e.contentDocument && e.contentDocument.body.offsetWidth) 
                e.width = e.contentDocument.body.offsetWidth + 35;
            }
              
              `
        
            }}> */}
            
        {/* </script> */}
        

<div className="fb-comments" data-href={`${link}`} data-colorscheme="dark"  data-width="100%" data-numposts="10"></div>

        {/* <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> */}
        </div>
    )
}
