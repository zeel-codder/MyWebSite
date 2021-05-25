/**
 @name:GoogleAuth
 @type:React Component
 @param:none
 @returns: Google Sing IN Button
 @functionality : This Function is used to Google Sig in option
**/


// Imports
// ====================================
import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import GoogleSvg from './Google.Svg';
// ====================================


const GoogleAuth = ({ text, responseSuccess }) => {
    return (
        <GoogleLogin
            clientId="823218346829-6rsuihi7nes49dvp64rt71hpen8jb585.apps.googleusercontent.com"
            // buttonText={text}
            render={renderProps => (
                <button className="btn icons"  onClick={renderProps.onClick} disabled={renderProps.disabled}>
                    <GoogleSvg></GoogleSvg>
                     {text}</button>
            )}
            onSuccess={responseSuccess}
            onFailure={(error) => console.log(error)}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleAuth
