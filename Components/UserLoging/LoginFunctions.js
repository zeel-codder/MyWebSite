import axios from 'axios';
// import React from "react";

const FindUser = async (e,state,dispatchUser,Reducer,closeLogin) => {
    e!==null && e.preventDefault();
    const newUser = {
        name: state.email,
        password: state.passWord
    }
    console.log(newUser);
    axios.post(`.netlify/functions/FindUser`, { ...newUser })
        .then((res) => {
            // console.log(res.);
            // console.log(res.data)
            res = JSON.parse(res.data.message);
            if (res.password === state.passWord) {
                closeLogin();
                dispatchUser({ type: 'UserLogIn', data: res });

            } else {
                alert('Wrong PassWord')
            }
            Reducer({ type: 'changeLoadingFalse' });
        })
        .catch((error) => {
            alert('UserName is not valid')
            Reducer({ type: 'changeLoadingFalse' });
        });

}



const AddUser = async (e,state,dispatchUser,Reducer,closeLogin) => {
    e!==null && e.preventDefault();
    // console.log(e)
    if (state.issame) {

        const newUser = {
            name: state.email,
            password: state.passWord
        }

        axios.post('.netlify/functions/AddUser', newUser)
            .then((res) => {
                if (res.status === 200) {
                    // console.log(res);
                    closeLogin();
                    dispatchUser({ type: 'UserLogIn', data: newUser });
                }
                Reducer({ type: 'changeLoadingFalse' });
            })
            .catch((error) => {
                console.log(error);
                alert('User Exits');
                Reducer({ type: 'changeLoadingFalse' });
                // alert('error');
            });
    } else {
        alert('Pass Word Done mathch')
        Reducer({ type: 'changeLoadingFalse' });
    }
}


const AddUserWithGoogle=async(res,dispatchUser,Reducer,closeLogin)=>{
    console.log(res);

}
const FindUserWithGoogle=async(res,dispatchUser,Reducer,closeLogin)=>{
    console.log(res);

}
export {FindUser,AddUser, AddUserWithGoogle,FindUserWithGoogle};