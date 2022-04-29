import myaxios from "./myaxios"

export const loginUser = (vitoria) => {
    return {
        type: 'login/loginUser',
        vitoria
    }
}

export async function reduxLogin({googleToken}){
    return async dispatch => {
        const response = await myaxios.post("/auth/loginWithGoogle", {googleToken})
         const token = response.data.token;
         console.log(token);
        localStorage.setItem("token", response.data.token);
        dispatch(loginUser('legal'))
    }
}