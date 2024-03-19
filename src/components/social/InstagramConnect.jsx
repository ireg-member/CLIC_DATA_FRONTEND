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
  scope={['user_profile']}
  onSuccess={responseInstagram}
  onFailure={(error) => console.error('Login error:', error)}
/>


    </>
  )
}

export default InstagramConnect
