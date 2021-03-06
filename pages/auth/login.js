import React from 'react';
// import Auth from 'Components/UserLsoging/auth'
import loadable from '@loadable/component'
const   Auth  = loadable(() => import('Components/UserLoging/auth'))



export default function Login({id}) {
   
  // console.log(id)
  // 
    return (
      
      <Auth isLogingIn={true} clientId={id}></Auth>
    )
  }

  export async function getStaticProps(context) {
    const id=process.env.clientId;
    return {
      props: { id }, // will be passed to the page component as props
    }
  }