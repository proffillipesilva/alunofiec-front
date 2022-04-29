import React from 'react';
import GoogleLogin from 'react-google-login';
import myaxios from './myaxios';
import { reduxLogin } from './actions';
import { useDispatch } from 'react-redux';


const Login = () => {

 const dispatch = useDispatch();

const responseGoogle = async (response) => {
  console.log(response)
  const googleToken = response.tokenId;
  dispatch(await reduxLogin({googleToken}));

  
}

return(
  <GoogleLogin
    clientId="seuClientId"
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