import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const FacebookConnect = () => {
  return (
    <div>
      {!profile ? (
        <LoginSocialFacebook
          appId="302157682617454"
          scope="pages_show_list, business_management, pages_read_engagement, pages_manage_posts, pages_manage_engagement"
          onResolve={(response) => {
            console.log(response);
            setProfile(response.data);
            
          }}
          onReject={(error) => {
            console.log(error);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      ) : (
        ""
      )}

      {profile ? (
        <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} />
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default FacebookConnect