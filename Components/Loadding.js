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
          
                <img src="/images/Loadding.svg" className="line1" alt="Loading.."></img>
            
            {/* <hr></hr> */}
        </div>
        </>
    )
}

export default Loading;