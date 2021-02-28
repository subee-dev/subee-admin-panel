import { CLIENT_ID } from "components/Authentication/constant";
import React from "react";
import GoogleLogin from "react-google-login";

export default function LogInPage(props) {
  const responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };

  const hadnleLogin = (profile) => {};
  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonTExt="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
