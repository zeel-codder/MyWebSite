/**
 @name:reducer
 @type:Javascript Function
 @param:state ,action
 @returns: Updated State object.
 @functionality : This Reducer of Login Website Hook Reducer UserState.
**/

export const reducer = (state, action) => {
 

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
        case 'setname':
            return { ...state, name: action.data };
        case 'setEmail':
            return { ...state, email: action.data };

    }
    return { ...state };

}

