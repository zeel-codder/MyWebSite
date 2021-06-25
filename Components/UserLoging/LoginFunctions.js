// import axios from 'axios';
import { User } from '@const/List';
import { GetUser, AddUserInDataBase, UserExitsInDataBase, MailToUser } from '@api/User-Blog-Api';
// import React from "react";


const GetNewUser = (username, email) => {
    return { username, email };
}


const FindUser = async (e, state, Reducer, GotoHome) => {
    e !== null && e.preventDefault();
    console.log('call')

    const newUser = GetNewUser(state.name, state.email);

    try {
        await UserExitsInDataBase(newUser);
        await MailToUser(newUser);
        alert('Verification Link Is Sent to Your Mail, Please verify form login');
        Reducer({ type: 'changeLoadingFalse' });
    }
    catch (e) {
        console.error(e)
        alert('User not Exits, Please try to Sing Up First');
        Reducer({ type: 'changeLoadingFalse' });
    }


}



const AddUser = async (e, state, Reducer, GotoHome) => {


    e !== null && e.preventDefault();
    console.log('call')

    const newUser = GetNewUser(state.name, state.email);

    

    try {
        await UserExitsInDataBase(newUser);

        alert('User  Exits, Please try again');
        Reducer({ type: 'changeLoadingFalse' });

    }
    catch (e) {
        console.error(e)
        await MailToUser(newUser);
        alert('Verification Link Is Sent to Your Mail, Please verify form Sing Up');

        Reducer({ type: 'changeLoadingFalse' });
    }


  
}


const AddUserWithGoogle = async (data, Reducer, GotoHome) => {

    const newUser = GetNewUser(data.profileObj.name, data.profileObj.email);


    try {
        await UserExitsInDataBase(newUser);

        alert('User  Exits, Please try again');
        Reducer({ type: 'changeLoadingFalse' });

    }
    catch (e) {
        try {
            const res = await AddUserInDataBase(newUser);
            const data = res.data;
            // const user=data.result;
            const {_id,username,email}=data.result;
            const {token}=data;
            const ans={_id,username,email,token}
            localStorage.setItem(User, JSON.stringify(ans));
            await GotoHome();
            Reducer({ type: 'changeLoadingFalse' });
    
        } catch (e) {
            alert('User Exits, Please try to Sing Up Again');
            Reducer({ type: 'changeLoadingFalse' });
    
        }
        Reducer({ type: 'changeLoadingFalse' });
    }


  

}
const FindUserWithGoogle = async (data, Reducer, GotoHome) => {

    console.log(data)


    const newUser = GetNewUser(data.profileObj.name, data.profileObj.email);

    // console.log(newUser)
    try {
        const res = await GetUser(newUser.email);
        const data = res.data;
        // const user=data.result;
        const {_id,username,email}=data.result;
        const {token}=data;
        const ans={_id,username,email,token}

        localStorage.setItem(User, JSON.stringify(ans));
        Reducer({ type: 'changeLoadingFalse' });
        await GotoHome()


    } catch (e) {
        console.log(e);
        alert('User not Exits, Please try to Sing Up First');
        Reducer({ type: 'changeLoadingFalse' });
    }

}
export { FindUser, AddUser, AddUserWithGoogle, FindUserWithGoogle };