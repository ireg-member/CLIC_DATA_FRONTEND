import React from "react";
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
    console.log(response);
  }

const InstagramConnect = () => {
  return (
    <>
<InstagramLogin
  clientId="862618282301080"
  buttonText="Login with Instagram"
  onSuccess={(res) => console.log(res)}
  onFailure={(error) => console.log('Login error:', error)}
  redirectUrl="https://74d4-39-58-131-72.ngrok-free.app/"
  scope={['user_profile']}
  
/>


    </>
  )
}

export default InstagramConnect
