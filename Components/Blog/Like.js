/**
 @name:Like
 @type:React Component
 @param:none
 @returns: JSX of Like of Blog.
 @functionality : This Component is display like od Blog.
**/


// Imports
// ====================================
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {useState,useEffect} from 'react';
import React from "react";
import { useRouter } from 'next/router'
import {GetUser,UpdateBlogLike } from '@api/User-Blog-Api'
import {User} from '@const/List'
// import {useEffect} from 'react';



// import axios from 'axios';
// import {useGlobalContext} from '../context';
// import { response } from 'express';
// ====================================




const Like=(props)=>{

  
    
    // [1,2].includes
    const {blogInfo,isBlogShort}=props;
    
    // const {UserState}=useGlobalContext();
    const [isLike,setIsLike]=useState(false);
    const [user,setUser]=useState(null)
    const [isLoading,setisLoading]=useState(false)
    const [Like,setLike]=useState(blogInfo.like);
    // const user=JSON.parse()
    const router=useRouter();
    // const {Loading}=useGlobalContext();

    // console.log(blogInfo,isBlogShort)


    const UpdateLike=async (old,newData,like)=>{
            await UpdateBlogLike (old,newData);
            setIsLike(!isLike);
            setLike(like);
            setisLoading(false)
    }
    

    const getUser=async()=>{
        const name=JSON.parse(localStorage.getItem(User)).email
        try{
          
            const temuser=await GetUser(name)
            const isBlogLike=temuser.data.result.LikePage.includes(blogInfo.name);
            setUser(temuser)
            setIsLike(isBlogLike);
        }catch{
            localStorage.removeItem(User);
        }
        
        // console.log(temuser)
    }

    const PostLike=()=>{
        // console.log('')
        if(localStorage.getItem(User)){
            setisLoading(true);
            let like=0;
            if(!isLike){
                like=Like+1;
            }else{
                if(Like!==0)
                {
                    like=Like-1;
                   
                }else{
                    like=Like;
                }
            }
    
            const odd={...blogInfo}
            const new_data={like,
                LikePage:blogInfo.name
                }
    
            UpdateLike(odd,new_data,like);
            
        }else{
            alert('LogIn First');
            router.push('/auth/singup')
        }

    }

    useEffect(() => {
        if(localStorage.getItem(User)){
            getUser()
        }

    }, [])

    if(isBlogShort){

        // const {like}=props;

        return(
            <h2 className="Like">
            <span className="Link-Page" onClick={PostLike}>
            <FavoriteIcon className="like-icon"/>
            {Like}
            </span>
            </h2>

        )
    }
    

    return (
        <h2 className="Like">Like:
        <span className={`Like-Page ${isLoading?"pn":""}`}  style={{fontSize:"1.5rem"}} 

        
        onClick={ PostLike}>
        {
            isLoading
            ?
            
            <img className="MuiSvgIcon-root like-icon" src='/images/Loadding.svg' style={{pointerEvents:"none"}}/>
            :
        
            !isLike? 
            <FavoriteBorderIcon className="like-icon"/>:<FavoriteIcon className="like-icon"/>
        }
        {Like}
        </span>
        </h2>

    )
}

export default Like;