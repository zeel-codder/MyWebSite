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
import {useState} from 'react';
// import {useEffect} from 'react';
import axios from 'axios';
import {useGlobalContext} from '../context';
// import { response } from 'express';
// ====================================




const Like=(props)=>{
    
    const {blogInfo,isBlogShort}=props;
    const {UserState}=useGlobalContext();
    const [isLike,setIsLike]=useState(false);
    const [Like,setLike]=useState(props.like);
    // const {Loading}=useGlobalContext();


    const UpdateLike=async (old,newData)=>{
        
        // console.log({...old},{...old,...newData});

        // await axios({
        //     method: 'post',
        //     url: '/Blog/Update',
        //     filter:{...old},
        //     update:{...old,...newData},
        //   })
            await axios.post('/.netlify/functions/BlogInfoUpdate',{ filter:{...old},
            update:{...old,...newData},})




    }

    const PostLike=()=>{
        if(UserState.isUserIn){
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
            const new_data={like}
    
            UpdateLike(odd,new_data);
        }else{
            alert('LogIn First');
        }

    }


    if(isBlogShort){

        // const {like}=props;

        return(
            <h2 className="Like">Like:
            <span className="Link-Page" onClick={PostLike}>
            <FcLike className="like-icon"/>
            {Like}
            </span>
            </h2>

        )
    }

    return (
        <h2 className="Like">Like:
        <span className="Like-Page" onClick={PostLike}>
        {
            
            !isLike? <FavoriteIcon className="like-icon"/>: <FavoriteBorderIcon className="like-icon"/>
        }
        {Like}
        </span>
        </h2>

    )
}

export default Like;