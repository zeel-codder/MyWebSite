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
import axios from 'axios';
import React from "react";
import { useGlobalContext } from '../context';
import GoogleButton from './GoogleAuth';
import { FindUser, AddUser, AddUserWithGoogle, FindUserWithGoogle } from './LoginFunctions';
// ==================================== 


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
                compassWord: ''
            };
        case 'changeLoginTrue':
            // const tem=!state.isLoading;
            return {
                ...state, isLoginOpen: true, issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: ''
            };
        case 'changeLoginFalse':
            return { ...state, isLoginOpen: false, issame: false,
                isLoading: false,
                passWord: '',
                email: '',
                compassWord: '' };
        case 'SetSameTrue':
            return { ...state, issame: true };
        case 'SetSameFalse':
            return { ...state, issame: false };
        case 'setEmail':
            return { ...state, email: action.data };
        case 'setPassword':
            return { ...state, passWord: action.data };
        case 'setComPassword':
            return { ...state, compassWord: action.data };
        case 'TogglePassWordShow':
            const ans=!state.isPassWordShowOpen;
            return { ...state, isPassWordShowOpen: ans };

    }
    return { ...state };

}


const Login = (props) => {

    const InitialState = {
        isLoginOpen: props.choice !== "Sing In",
        issame: false,
        isLoading: false,
        passWord: '',
        email: '',
        compassWord: '',
        isPassWordShowOpen:false,
    }

    const [state, Reducer] = useReducer(reducer, InitialState);
    // const [isLoginOpen, setIsLoginOpen] = useState(props.choice!=="Sing In");
    // const [issame,setInsane]=useState(false);
    // const [isLoadding,setIsLoadding]=useState(false);
    // const [passWord,setpassWord]=useState('');
    // const [email,setemail]=useState('');
    // const [compassWord,setCompassWord]=useState('');
    const { dispatchUser, Loading } = useGlobalContext();


    useEffect(() => {
        if (state.passWord === state.compassWord) {
            Reducer({ type: 'SetSameTrue' });
        } else {

            Reducer({ type: 'SetSameFalse' });
        }

    }, [state.passWord, state.compassWord])

    // console.log(prpos);

    return (

        <div className="blog-container Log">

            <div className="login-choice">
                <span onClick={() => Reducer({ type: 'changeLoginTrue' })} className={state.isLoginOpen && `open`}>Log in</span>
                <span onClick={() => Reducer({ type: 'changeLoginFalse' })} className={state.isLoginOpen || `open`}>Sing in</span>
                <span onClick={() => props.closeLogin()} className="close Mybutton">[X]</span>
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
                        FindUser(e, state, dispatchUser, Reducer, props.closeLogin)
                        :
                        AddUser(e, state, dispatchUser, Reducer, props.closeLogin);

                }}>

                <div>
                    <input className="form-input"
                        onChange={(e) => Reducer({ type: 'setEmail', data: e.target.value })} value={state.email}
                        type="email" name="email" placeholder="Enter Email" required></input>
                </div>


                <div>
                    <input
                        className={`form-input`}
                        type={state.isPassWordShowOpen? "text" :"passWord"} 
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
                            !state.passWord
                                ?
                                <span className="alert">PassWord Must Be Same</span>
                                :
                                !state.issame
                                    ?
                                    <span className="alert">PassWord Not Same</span>
                                    :
                                    <span className="alert" style={{ color: 'green' }}>PassWord Same</span>
                        }
                        <div>
                            <input 
                            className={`form-input ${state.issame || 'Wrong'}`} 
                            type={state.isPassWordShowOpen? "text" :"passWord"} 
                            name="subject" 
                            onChange={(e) => Reducer({ type: 'setComPassword', data: e.target.value })} 
                            value={state.compassWord} 
                            placeholder="Enter Confirm Password" 
                            required></input>
                        </div>
                    </>
                }
                {/* <div> */}
                <div>
                    <input 
                    type="checkbox" 
                    name="show-pass" 
                    onClick={(e)=>Reducer({ type: 'TogglePassWordShow'})}
                    ></input> : <span style={{fontSize:'1rem'}}>Show PassWord</span>
                </div>
                <button
                    className="btn"
                    type="submit">{state.isLoginOpen ? 'Log In' : 'Sing In'}
                </button>

                <span className="alert">Or</span>

                <GoogleButton
                    text={`${state.isLoginOpen ? 'Log' : 'Sing'} In With Google`}
                    responseSuccess={
                        state.isLoginOpen
                            ?
                            (res) => FindUserWithGoogle(res, dispatchUser, Reducer, props.closeLogin)
                            :
                            (res) => AddUserWithGoogle(res, dispatchUser, Reducer, props.closeLogin)
                    }
                />


            </form>

        </div>
    )



}

export default Login;