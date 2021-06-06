import React from 'react'
import UserProfile from 'Components/User/UserProfile'
import Template from '@Layout/Template'


export default function User({data}) {

  
    return (
      <Template Component={UserProfile} data={data}></Template>
    )
  }

  export async function getStaticProps(context) {
    const name=context.params.name;
    const data={name}
  
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
  