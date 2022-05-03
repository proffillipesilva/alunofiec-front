import React from 'react';
import GoogleLogin from 'react-google-login';
import myaxios from './myaxios';
import { reduxLogin } from './actions';
import { useDispatch } from 'react-redux';


const Login = (props) => {

 const dispatch = useDispatch();

const responseGoogle = async (response) => {
  console.log(response)
  const googleToken = response.tokenId;
  const fcmToken = props.token;
  dispatch(await reduxLogin({googleToken, fcmToken}));
  
  
}

return(
  <GoogleLogin
    clientId="277380091468-1pe2je91eas7almtof0bf0bfhmehbvgi.apps.googleusercontent.com"
    render={renderProps => (
        <div className='container' style={{display: "flex", alignItems: 'center', justifyContent: 'normal', height: '100vh'}}>

        <button className="btn btn-primary" onClick={renderProps.onClick} disabled={renderProps.disabled}>Logar Com Google</button>
        </div>
      )}
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
)
};

export default Login;