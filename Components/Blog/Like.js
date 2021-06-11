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



import axios from 'axios';
// import {useGlobalContext} from '../context';
// import { response } from 'express';
// ====================================




const Like=(props)=>{
    
    // [1,2].includes
    const {blogInfo,isBlogShort}=props;
    
    // const {UserState}=useGlobalContext();
    const [isLike,setIsLike]=useState(false);
    const [user,setUser]=useState(null)
    const [Like,setLike]=useState(blogInfo.like);
    // const user=JSON.parse()
    const router=useRouter();
    // const {Loading}=useGlobalContext();

    // console.log(blogInfo,isBlogShort)


    const UpdateLike=async (old,newData)=>{
            await UpdateBlogLike (old,newData);
    }

    const getUser=async()=>{
        const name=JSON.parse(localStorage.getItem(User)).result.name
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
            setIsLike(!isLike);
            setLike(like);
    
            const odd={...blogInfo}
            const new_data={like,
                LikePage:blogInfo.name
                }
    
            UpdateLike(odd,new_data);
        }else{
            router.push('/auth/singup')
            alert('LogIn First');
        }

    }

    useEffect(() => {
        if(localStorage.getItem(User)){
            getUser()
        }
        console.log(blogInfo)
            
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
        <span className="Like-Page"  style={{fontSize:"1.5rem"}}
        
        onClick={ PostLike}>
        {
            
            !isLike?  <FavoriteBorderIcon className="like-icon"/>:<FavoriteIcon className="like-icon"/>
        }
        {Like}
        </span>
        </h2>

    )
}

export default Like;