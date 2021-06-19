import axios from 'axios';
import bcrypt from 'bcryptjs';
import { User , Gkey} from '@const/List';
import { GetUser, AddUserInDataBase } from '@api/User-Blog-Api';
// import React from "react";



const GetNewUser=(username,email,password)=>{
    return {username,email,password};
}

const FindUser = async (e,state,Reducer,GotoHome) => {
    e!==null && e.preventDefault();

    const newUser=GetNewUser(state.name,state.email,state.passWord);
    
    // console.log(newUser);

    try{

        const res=await GetUser(newUser.email);
        const data=res.data;
        const user= res.data.result;
        const isPassWordSame=await bcrypt.compare( state.passWord ,user.password );
        if (isPassWordSame) {
            
            newUser.username =res.username;
            localStorage.setItem(User,JSON.stringify(data));
            await GotoHome()

        } else {
            alert('Wrong PassWord')
        }
        Reducer({ type: 'changeLoadingFalse' });

    }catch(e){
        console.error(e)
        alert('UserName is not valid')
        Reducer({ type: 'changeLoadingFalse' });
    }

}



const AddUser = async (e,state,Reducer,GotoHome) => {
    e!==null && e.preventDefault();
  
    if (state.issame) {

        const newUser=GetNewUser(state.name,state.email,state.passWord);
     
        try{
            const res=await AddUserInDataBase(newUser);
            const data=res.data;
            // const user=data.result;
            localStorage.setItem(User,JSON.stringify(data));
            await GotoHome();
            Reducer({ type: 'changeLoadingFalse' });

        }catch(e){
            alert('User Exits');
            Reducer({ type: 'changeLoadingFalse' });

        }
    } else {
        alert('Pass Word Done mathch')
        Reducer({ type: 'changeLoadingFalse' });
    }
}


const AddUserWithGoogle=async(data,Reducer,GotoHome)=>{
    
    const newUser=GetNewUser(data.profileObj.name,data.profileObj.email,data.profileObj[Gkey]);
    
    try{
        const res=await AddUserInDataBase(newUser);
        const data=res.data;
        // const user=data.result;
        localStorage.setItem(User,JSON.stringify(data));
        await GotoHome();
        Reducer({ type: 'changeLoadingFalse' });

    }catch(e){
        alert('User Exits');
        Reducer({ type: 'changeLoadingFalse' });

    }

}
const FindUserWithGoogle=async(data,Reducer,GotoHome)=>{
    console.log('call')
    

    const newUser=GetNewUser(data.profileObj.name,data.profileObj.email,data.profileObj[Gkey]);

    // console.log(newUser)
    try{
        const res=await GetUser(newUser.email);
        const data=res.data;
        const user=data.result;
        const isPassWordSame=await bcrypt.compare(newUser.password,user.password);

        if (isPassWordSame) {
            localStorage.setItem(User,JSON.stringify(data));
            Reducer({ type: 'changeLoadingFalse' });
            await GotoHome()

        } else {
            alert('Wrong PassWord')
        }
        Reducer({ type: 'changeLoadingFalse' });

    }catch(e){
        console.log(e);
        alert('User not Exits');
        Reducer({ type: 'changeLoadingFalse' });

    }

}
export {FindUser,AddUser, AddUserWithGoogle,FindUserWithGoogle};