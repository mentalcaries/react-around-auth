import React from "react";
import UserForm from "./UserForm";
import * as auth from '../utils/auth'

function Register(){

  function handleRegisterSubmit(userData){
    // const {password, email} = userData;

    auth.register(userData)
  }

  return(
<UserForm formTitle="Sign Up"
      formText="Already a member? Log in here!"
      formButton="Sign Up"
      onSubmit={handleRegisterSubmit}
/>
  )
}

export default  Register