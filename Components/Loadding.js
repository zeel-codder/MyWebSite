/**
 * This is Footer page of zeel-codder web site.
 * Functions:
 * @name:Loading
 * @type:React Component
 * @param:none
 * @returns:JSX of Loading component
 * @functionality : This Component is use to show Loading animation on page.
 */


 import React from "react";

const Loading= ()=>{
  
    
    return(
        <>
        <div class="loadding">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            {/* <hr></hr> */}
        </div>
        </>
    )
}

export default Loading;