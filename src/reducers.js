const initialState = {
    loggedIn: false
}

export default function appReducer(state = initialState, action){
    switch(action.type){

        case 'login/loginUser':
            return {
                ...state,
                loggedIn : true
            }

        default:
            return state;
    }
}