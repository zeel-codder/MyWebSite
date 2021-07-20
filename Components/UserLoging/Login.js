/**
 @name:Login
 @type:React Component
 @param:none
 @returns: JSX of Profile of User details
 @functionality : This Component is use to show The profile of current user in Web.
**/



// Imports
import {  useReducer } from 'react';
// import axios from 'axios';
import React from "react";
// import { useGlobalContext } from '../context';
import GoogleButton from './GoogleAuth';
import Loading from '../Loadding'
import { useRouter } from 'next/router'
import { reducer } from './reduce';
import { FindUser, AddUser, AddUserWithGoogle, FindUserWithGoogle } from './LoginFunctions';






const Login = (props) => {

    const InitialState = {
        isLoginOpen: props.choice !== "Singup",
        isLoading: false,
        name:'',
        email: '',
       
    }

    const router = useRouter()
    const {clientId}=props;
    const [state, Reducer] = useReducer(reducer, InitialState);
    const LoginKey='Log In'
    const SingUpKey='Sing Up'



    const GotoHome = () => {
        router.push('/')
    }




    return (

        <div className="Log">
        

            <div className="login-choice form">
                <span onClick={() => router.push('/auth/login')} className={state.isLoginOpen ? `open` : null}>{LoginKey}</span>
                <span onClick={() => router.push('/auth/singup')} className={state.isLoginOpen ? null : `open`}>{SingUpKey}</span>
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


                {/* <div>
                    <input
                        className={`form-input`}
                        type={state.isPassWordShowOpen ? "text" : "passWord"}
                        name="subject"
                        onChange={(e) => Reducer({ type: 'setPassword', data: e.target.value })}
                        value={state.passWord}
                        placeholder="Enter PassWord"
                        required></input>
                </div> */}
                {/* {
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
                        } */}
                        {/* <div>
                            <input
                                className={`form-input ${state.issame || 'Wrong'}`}
                                type={state.isPassWordShowOpen ? "text" : "passWord"}
                                name="subject"
                                onChange={(e) => Reducer({ type: 'setComPassword', data: e.target.value })}
                                value={state.compassWord}
                                placeholder="Enter Confirm Password"
                                required></input>
                        </div> */}
                    {/* </>
                } */}
                {/* <div> */}
                {/* <div style={{flexDirection:"row", alignItems: "center"}}>
                    <input
                        type="checkbox"
                        name="show-pass"
                        onClick={(e) => Reducer({ type: 'TogglePassWordShow' })}
                    ></input> : <span style={{ fontSize: '1rem' }}>Show Password</span>
                </div> */}
                <button
                    className="btn"
                    type="submit">{state.isLoginOpen ? LoginKey : SingUpKey}
                </button>

                <span className="alert" style={{color:"green",fontWeight:"bold"}}>OR</span>

                <GoogleButton 
                    clientId={clientId}
                    text={`${state.isLoginOpen ? LoginKey : SingUpKey}  With Google`}
                    responseSuccess={(res)=>{
                        
                        Reducer({ type: 'changeLoadingTrue' });
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