/**
 @name:BlogPage
 @type:React Component
 @param:none
 @returns: JSX of BlogPage.
 @functionality : This Component is Data of Blog on screen.
**/
// Html/Html4SimpleTages/Html4SimpleTages.md

// Imports
// ====================================
import { useEffect} from "react";
import React from "react";
import {AddUserInDataBase, GetUser ,UserExitsInDataBase} from 'api/User-Blog-Api'
import { User } from "@const/List";

import loadable from '@loadable/component'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { useRouter } from 'next/router'
// const   Like   = loadable(() => import('@Blog/Like'))
// const   Share    = loadable(() => import('@Blog/share'))
const   Template    = loadable(() => import('@Layout/Template'))
// const   Share    = loadable(() => import('@Blog/share'))
// const 





const Verify = () => {

  const dic = {title:"Verify", keywords:"auth" ,isShoWList:false}
  // console.log(dic)

  return (
    <Template Component={Var} data={dic}></Template>
  )

}
export default Verify;


function Var(){
    const router=useRouter()
    const {d}=router.query;
    // console.log(key)
  
  
    const GotoHome=()=>{
  
      router.push('/');
  
    }
  
    const addUser=async (newUser)=>{
          try {
          const res = await AddUserInDataBase(newUser);
          const data = res.data;
          localStorage.setItem(User, JSON.stringify(data));
          await GotoHome();
  
      } catch (e) {
          alert('Some ErroR Occurs to LogIn,Please Try Again ');
      
  
      }
  
    }
  
    const FindUser=async(newUser)=>{
  
      try {
  
          const res = await GetUser(newUser.email);
          const data = res.data;
          // const user = res.data.result;
          newUser.username = res.username;
          localStorage.setItem(User, JSON.stringify(data));
          await GotoHome();
  
      } catch (e) {
          // console.error(e)
          alert('Some ErroR Occurs to LogIn,Please Try Again ');
      
      }
  
    }

    useEffect(async () => {
        // console.log(router)
        const {email,username,time}=jwt.verify(d, process.env.NEXT_PUBLIC_key)

        const time2=new Date().getTime();

        // console.log(time,time2)

        if(time2>=time){
            alert('Link Is Expirer')
            router.push('/auth/singup');
        }

        const data={username,email}

        try{
          await UserExitsInDataBase(data);
          FindUser(data)
        }catch(e){
          addUser(data)
        }
    }, [])
  
    return <h1>Loading...</h1>
}


// export async function getStaticProps(context) {
//     const key=process.env.key;
//     console.log(key)

  
//     return {
//       props:{data:key,na:"zeel"}
//     }
//   }
