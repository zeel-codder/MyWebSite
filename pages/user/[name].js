import React from 'react'
import UserProfile from 'Components/User/UserProfile'
import Template from '@Layout/Template'
import {User} from '@const/List'
import axios from 'axios'
import  GetUserProfile  from 'server/helpers/User/GetUserProfile'



export default function UserDetails({data}) {
  // console.log(data);

  
    return (
      <Template Component={UserProfile} data={data}></Template>
    )
  }

  export async function getStaticProps(context) {
    const uname=context.params.name;

    // const Link=process.env.WebLink+'/api/finduser';
    // const dataUser=await axios.post(Link,{name:uname,isNotCreateToken:true})
    // // console.log(dataUser)
    // const {name,username,LikePage}=dataUser.data.result;
    // const LikeDic=await getList(LikePage);
    // const data={name,username,LikeDic}
    const data=await GetUserProfile(uname)
    console.log(data);
  
    return {
      props:{data}
    }
  }
  export async function getStaticPaths() {
  
  
  
    return {
      paths: [],
      fallback: 'blocking'
  }
  }

  