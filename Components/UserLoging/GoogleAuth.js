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


const GoogleAuth = ({ text, responseSuccess ,clientId}) => {
    
    return (
        <GoogleLogin 
            clientId={clientId}
            // buttonText={text}
            render={renderProps => (
                <button className="btn"  style={{flexDirection:"row", alignItems: "center"}}onClick={renderProps.onClick} disabled={renderProps.disabled}>
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
