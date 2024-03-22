import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";

const FacebookConnect = () => {

  const [facebookConnect, setFacebookConnect] = useState({});
  const [facebookConnectError, setFacebookConnectError] = useState(null);

  const connectFacebookAccount = async (e) => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("access_token")}` }
    }; 
    await axios.get(
      `http://localhost:8000/social_media/facebook_connect/?access_token=${localStorage.getItem("facebookAccessToken")}&fb_user_id=${localStorage.getItem("facebookUserId")}`,
      config
    )
    .then( (response) => {
      console.log(response, "connected");
      setFacebookConnect(() => ({connected: "Connected"}))
    })
    .catch((error) => {
      console.log(error)
      // setFacebookConnectError()
    })
  }

  const onSuccess = (response) => {
    localStorage.setItem("facebookAccessToken", response.data.accessToken);
    localStorage.setItem("facebookUserId", response.data.userID)
    connectFacebookAccount()
    console.log(response)
  }

  const onReject = (error) => {
    console.log(error)
  }

  return (
    <div>
        <LoginSocialFacebook
          appId="1471304853482613"
          scope="pages_show_list, business_management, pages_read_engagement, pages_manage_posts, pages_manage_engagement"
          onResolve={onSuccess}
          onReject={onReject}
        >
        <FacebookLoginButton>Facebook</FacebookLoginButton>
        <span style={{color:"green",}}>{facebookConnect?.connected}</span>
        </LoginSocialFacebook>
    </div>
  )
}

export default FacebookConnect