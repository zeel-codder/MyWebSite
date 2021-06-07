/**
 @name:Profile
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/


// Imports
// ====================================
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import React from "react";
// import {Link} from 'react-dom';
import { useState } from 'react';
// import Loadding from './Loadding'
// import { useGlobalCont/ext } from '../context';
import Loading from '../Loadding';
// ====================================

const Context = () => {


    //UseState Used to see Display Loading Component on the screen.
    const [loading, setLoading] = useState(false);

    //=============================
    // @name:MailMe
    // @type:Javascript Function
    // @param:Form Event
    // @return:none
    // @functionality: Function is used to send Email to zeel with the help of email js.
    //=============================

    const MailMe = (e) => {

        e.preventDefault();

        document.documentElement.scrollTop = 0;

        init("user_T7VYY639xcXhhBCzLUUCo");

        setLoading(true);

        emailjs.sendForm('service_50van2j', 'template_ar6zjgw', e.target)
            .then((result) => {
                // console.log(result.text);
                alert("Send🙏🙏");
                setLoading(false);
            }, (error) => {
                // console.log(error.text);
            });

        e.target.reset();
    }



    return (
        <>
            {

                loading ? <Loading /> : null

            }

            <div id="contact">

            

            <h1>Contact Form</h1>
            <div className="row con">
                <div>

                    <h1> 

                        Let's Meet


                    </h1>
                </div>
                <form className="form" onSubmit={(e) => { MailMe(e) }}>
                    
                    <div>
                        <input className="form-input" type="text" title="Your name" name="name" placeholder="Enter Name" required></input>
                    </div>
                    <div>
                        <input className="form-input" type="email" title="Your Email" name="email" placeholder="Enter Email" required></input>
                    </div>
                    <div>
                        <input className="form-input" type="text" title="Email Subject" name="subject" placeholder="Enter Subject" required></input>
                    </div>
                    <div>
                        <input className="form-input" type="text" title="Email Body" name="message" placeholder="Enter Message" required></input>
                    </div>
                    {/* <div>/ */}
                    {/* <button className="btn" type="reset">Reset</button> */}
                    <button className="btn" type="submit">Send</button>
                    {/* </div> */}
                </form>

            </div>
            </div>
        </>
    )
}


export default Context;