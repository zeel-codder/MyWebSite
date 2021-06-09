
import Auth from 'Components/UserLoging/auth'
import React from 'react';



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
  }z