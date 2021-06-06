/**
 @name:Profile
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/



// Imports
// ====================================
// import { useGlobalContext } from '../context';
import React from "react";
// ====================================



const Profile=({name})=>{




    return (

        <div className="container">
        <h1 className="Mybutton">
        name:{name}
        </h1>
        </div>
        )
}

export default Profile;