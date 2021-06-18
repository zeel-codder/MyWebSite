/**
 @name:Login
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/



// Imports
// ====================================
// import { AiTwotoneMail } from 'react-icons/ai';
// import {BsFillPersonFill} from 'react-icons/bs';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import {MdSubject} from 'react-icons/md';
// import { useState } from 'react';
import { useEffect, useReducer } from 'react';
// import axios from 'axios';
import React from "react";
// import { useGlobalContext } from '../context';
// import GoogleButton from './GoogleAuth';
// import Loading from '../Loadding'
import { useRouter } from 'next/router'
import { FindUser, AddUser, AddUserWithGoogle, FindUserWithGoogle } from './LoginFunctions';
// ==================================== 
import loadable from '@loadable/component'
const  GoogleButton = loadable(() => import('./GoogleAuth'))
const  Loading = loadable(() => import('../Loadding'))
// const  GoogleButton = loadable(() => import('./GoogleAuth'))





/**
 @name:reducer
 @type:Javascript Function
 @param:state ,action
 @returns: Updated State object.
 @functionality : This Reducer of Login Website Hook Reducer UserState.
**/

const reducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case 'changeLoadingTrue':
            // const tem=!state.isLoading;
            return { ...state, isLoading: true };
        case 'changeLoadingFalse':
            return {
                ...state, isLoading: false, issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: '',
                name:''
            };
        case 'changeLoginTrue':
            // const tem=!state.isLoading;
            return {
                ...state, isLoginOpen: true, issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: '',
                name:''
            };
        case 'changeLoginFalse':
            return {
                ...state, isLoginOpen: false, issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: '',
                name:''
            };
        case 'SetSameTrue':
            return { ...state, issame: true };
        case 'SetSameFalse':
            return { ...state, issame: false };
        case 'setname':
            return { ...state, name: action.data };
        case 'setEmail':
            return { ...state, email: action.data };
        case 'setPassword':
            return { ...state, passWord: action.data };
        case 'setComPassword':
            return { ...state, compassWord: action.data };
        case 'TogglePassWordShow':
            const ans = !state.isPassWordShowOpen;
            return { ...state, isPassWordShowOpen: ans };

    }
    return { ...state };

}


const Login = (props) => {

    const InitialState = {
        isLoginOpen: props.choice !== "Singup",
        issame: false,
        isLoading: false,
        name:'',
        passWord: '',
        email: '',
        compassWord: '',
        isPassWordShowOpen: false,
    }

    const router = useRouter()
    const {clientId}=props;
    const [state, Reducer] = useReducer(reducer, InitialState);



    const GotoHome = () => {
        router.push('/')
    }



    useEffect(() => {
        if (state.passWord === state.compassWord) {
            Reducer({ type: 'SetSameTrue' });
        } else {

            Reducer({ type: 'SetSameFalse' });
        }

    }, [state.passWord, state.compassWord])

    // console.log(prpos);

    return (

        <div className="Log">
            {/* <em>Zeel Codder Web-Site Auth</em> */}

            <div className="login-choice form">
                <span onClick={() => router.push('/auth/login')} className={state.isLoginOpen ? `open` : null}>Log in</span>
                <span onClick={() => router.push('/auth/singup')} className={state.isLoginOpen ? null : `open`}>Sin up</span>
                {/* <span onClick={() => props.closeLogin()} className="close Mybutton">[X]</span> */}
            </div>

            {

                state.isLoading ? <Loading /> : null

            }
            <form
                className={`form ${state.isLoginOpen ? 'form-login' : 'form-singin'} open`}
                onSubmit={(e) => {
                    Reducer({ type: 'changeLoadingTrue' });
                    (state.isLoginOpen)
                        ?
                        FindUser(e, state, Reducer,GotoHome)
                        :
                        AddUser(e, state, Reducer,GotoHome);

                }}>

               {
                ! state.isLoginOpen 
                 &&
                   <div>
                    <input className="form-input"
                        onChange={(e) => Reducer({ type: 'setname', data: e.target.value })} value={state.name}
                        type="name" name="name" placeholder="Enter name" required></input>
                </div>
                } 
                <div>
                    <input className="form-input"
                        onChange={(e) => Reducer({ type: 'setEmail', data: e.target.value })} value={state.email}
                        type="email" name="email" placeholder="Enter Email" required></input>
                </div>


                <div>
                    <input
                        className={`form-input`}
                        type={state.isPassWordShowOpen ? "text" : "passWord"}
                        name="subject"
                        onChange={(e) => Reducer({ type: 'setPassword', data: e.target.value })}
                        value={state.passWord}
                        placeholder="Enter PassWord"
                        required></input>
                </div>
                {
                    state.isLoginOpen
                    ||

                    <>
                        {

                            (
                                state.passWord == '' &&
                                <span className="alert" style={{ color: 'green' }}>Enter password first</span>
                            )
                            ||
                            (
                                state.passWord.length < 8
                                &&
                                !/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(state.passWord)
                                &&
                                <span className="alert">PassWord Must be Strong(Add number,char etc..)</span>
                            )
                            ||
                            (
                                !state.issame
                                    ?
                                    <span className="alert">PassWord Not Same</span>
                                    :
                                    <span className="alert" style={{ color: 'green' }}>PassWord Same</span>
                            )
                        }
                        <div>
                            <input
                                className={`form-input ${state.issame || 'Wrong'}`}
                                type={state.isPassWordShowOpen ? "text" : "passWord"}
                                name="subject"
                                onChange={(e) => Reducer({ type: 'setComPassword', data: e.target.value })}
                                value={state.compassWord}
                                placeholder="Enter Confirm Password"
                                required></input>
                        </div>
                    </>
                }
                {/* <div> */}
                <div style={{flexDirection:"row", alignItems: "center"}}>
                    <input
                        type="checkbox"
                        name="show-pass"
                        onClick={(e) => Reducer({ type: 'TogglePassWordShow' })}
                    ></input> : <span style={{ fontSize: '1rem' }}>Show Password</span>
                </div>
                <button
                    className="btn"
                    type="submit">{state.isLoginOpen ? 'Log In' : 'Sin Up'}
                </button>

                <span className="alert">OR</span>

                <GoogleButton 
                    clientId={clientId}
                    text={`${state.isLoginOpen ? 'Log In' : 'Sin Up'}  With Google`}
                    responseSuccess={(res)=>{

                        // Reducer({ type: 'changeLoadingTrue' });
                        state.isLoginOpen
                        ?
                         FindUserWithGoogle(res, Reducer, GotoHome)
                        :
                         AddUserWithGoogle(res, Reducer, GotoHome)
                    }
                    }
                />


            </form>

        </div>
    )



}

export default Login;