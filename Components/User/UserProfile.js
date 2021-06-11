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
import { useEffect } from "react";
import { useRef } from "react";
import { User } from "@const/List";
import BlogShort from "BlogShort";
// ====================================



const Profile = ({ name, username, LikeDic }) => {

    const formref = useRef();




    return (
        
        <div className="blog-container">
            <h1 style={{textAlign:"center"}}>UserInfo</h1>

            <form className="form userInfo" contentEditable={false} ref={formref}>

                <div>
                    <span>User Name</span>
                    <input className="form-input"
                        type="name" name="name" value={username} required>

                    </input>
                </div>
                <div>
                    <span>Email</span>
                    <input className="form-input"
                        type="email" name="email" value={name} required>

                    </input>
                </div>

            </form>

            <h1 style={{textAlign:"center"}}>Like Blogs</h1>
  <div className="ListOfBlogs blog-container User">
    {
      
      LikeDic.map((page,index) => {
        
        return (<BlogShort {...page} key={index} />)
        
      })
      
    }
  </div>

        </div>
    )
}

export default Profile;