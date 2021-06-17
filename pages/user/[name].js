import React from 'react'
// import UserProfile from 'Components/User/UserProfile'
// import Template from '@Layout/Template'
// import {User} from '@const/List'
// import axios from 'axios'
import  GetUserProfile  from 'server/helpers/User/GetUserProfile'

import loadable from '@loadable/component'
const   UserProfile   = loadable(() => import('Components/User/UserProfile'))
const   Template    = loadable(() => import('@Layout/Template'))


export default function UserDetails({data}) {
  // console.log(data);

  
    return (
      <Template Component={UserProfile} data={data}></Template>
    )
  }

  export async function getStaticProps(context) {
    const uname=context.params.name;

    const data=await GetUserProfile(uname)
    // console.log(data);
  
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

  