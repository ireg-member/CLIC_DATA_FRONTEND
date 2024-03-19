import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import axios from "axios";

const FacebookConnect = () => {

  const {facebookConnectError, setFacebookConnectError} = useState({
    error_res: ""
  })

  const connectFacebookAccount = async (e) => {
    const user_token = "d5200e97d8c6e7646349fe56ffed549a4e3e7867"
    await axios.get(
      `http://localhost:8000/social_media/facebook_connect/?user_token=${user_token}&access_token=${localStorage.getItem("facebookAccessToken")}&user_token=${localStorage.getItem("facebookUserId")}`,
    )
    .then( (response) => {
      console.log(response, "connected")
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
        </LoginSocialFacebook>
    </div>
  )
}

export default FacebookConnect