
// eslint-disable-next-line import/no-anonymous-default-export

/**
 @name:reducer
 @type:Javascript Function
 @param:state as MainUserState, action as What type of Operation is Used.
 @returns: Updated State object.
 @functionality : This Reducer of Main Website Hook Reducer UserState.
**/

const reducer= (state,action)=>{
    
    if(action.type==="UserLogIn"){
        
        console.log({...state,isUserIn:true,UserInfo:action.data});
        
        return {...state,isUserIn:true,UserInfo:action.data};
    }
    
    return {...state};
    
}


export default reducer;