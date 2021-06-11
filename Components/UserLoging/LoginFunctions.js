import axios from 'axios';
import bcrypt from 'bcryptjs';
// import React from "react";

const FindUser = async (e,state,Reducer,GotoHome) => {
    e!==null && e.preventDefault();
    const newUser = {
        username:state.name,
        name: state.email,
        password: state.passWord
    }
    // console.log(newUser);
    axios.post(`/api/finduser`, { ...newUser })
        .then(async (res) => {
            // console.log(res.);
            // console.log(res.data)
            const data=res.data;
            res = res.data.result;
            const isPassWordSame=await bcrypt.compare( state.passWord ,res.password );
            if (isPassWordSame) {
            
                newUser.username =res.username;
                localStorage.setItem('User',JSON.stringify(data));
                // dispatchUser({ type: 'UserLogIn', data: res });
                  await GotoHome()

            } else {
                alert('Wrong PassWord')
            }
            Reducer({ type: 'changeLoadingFalse' });
        })
        .catch((error) => {
            console.error(error)
            alert('UserName is not valid')
            Reducer({ type: 'changeLoadingFalse' });
        });

}



const AddUser = async (e,state,Reducer,GotoHome) => {
    e!==null && e.preventDefault();
    // console.log(e)
    if (state.issame) {

        const newUser = {
            username:state.name,
            name: state.email,
            password: state.passWord
        }

        axios.post('/api/adduser', newUser)
            .then( async (res) => {
                if (res.status === 200) {
                    const data=res.data;
                    res = res.data.result;
                    // console.log(res);
                    localStorage.setItem('User',JSON.stringify(data));
                    // dispatchUser({ type: 'UserLogIn', data: newUser });
                     await GotoHome();
                }
                Reducer({ type: 'changeLoadingFalse' });
            })
            .catch((error) => {
                // console.log(error);
                alert('User Exits');
                Reducer({ type: 'changeLoadingFalse' });
                // alert('error');
            });
    } else {
        alert('Pass Word Done mathch')
        Reducer({ type: 'changeLoadingFalse' });
    }
}


const AddUserWithGoogle=async(data,Reducer,GotoHome)=>{
    
    const newUser = {
        username:data.profileObj.name,
        name: data.profileObj.email,
        password: data.profileObj.googleId,
        token: data.accessToken
    }
    // console.log(newUser,'<--');
    
    return await axios.post('/api/adduser', newUser)
    .then(async (res) => {
        const datau=res.data;
        res = res.data.result;
        if (res.status === 200) {
            // console.log(res);
            // dispatchUser({ type: 'UserLogIn', data: newUser });
        }
        
        localStorage.setItem('User',JSON.stringify(datau));
            Reducer({ type: 'changeLoadingFalse' });
             await GotoHome();
            
        })
        .catch((error) => {
            // console.log(error)/;
            alert('User Exits');
            Reducer({ type: 'changeLoadingFalse' });
            // alert('error');
            
        });
    // console.log(localStorage.getItem('User'),'<-');
}
const FindUserWithGoogle=async(data,Reducer,GotoHome)=>{
    // console.log(data)
    console.log('call')
    const newUser = {
        username:data.profileObj.name,
        name: data.profileObj.email,
        password: data.profileObj.googleId,
        token: data.accessToken

    }
    await axios.post('/api/finduser', { ...newUser })
    .then( async (res) => {
        const datau=res.data;
        res = res.data.result;
        // console.log(res);
        // console.log()
        // res = JSON.parse(res.data.message);
        // console.log(await bcrypt.hash(newUser.password),res.password  )

        const isPassWordSame=await bcrypt.compare(newUser.password,res.password);
        // const isPassWordSame=true;
        // console.log(isPassWordSame)
        if (isPassWordSame) {
            localStorage.setItem('User',JSON.stringify(datau));
            // dispatchUser({ type: 'UserLogIn', data: res });
            console.log('login')
            Reducer({ type: 'changeLoadingFalse' });
            await GotoHome()

        } else {
            alert('Wrong PassWord')
        }
        Reducer({ type: 'changeLoadingFalse' });
    })
    .catch((error) => {
        console.error(error);
                alert('UserName is not valid')
        Reducer({ type: 'changeLoadingFalse' });
    });

}
export {FindUser,AddUser, AddUserWithGoogle,FindUserWithGoogle};