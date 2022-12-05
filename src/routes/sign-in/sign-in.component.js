import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.util";

function SignIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return <button onClick={logGoogleUser}>SignIn</button>;
}

export default SignIn;
