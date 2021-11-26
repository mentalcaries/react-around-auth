import React from "react";
import UserForm from "./UserForm";

function Login({handleLogin}) {
  // const history = useHistory()
  // function handleLoginSubmit({password, email}) {
  //  if(!password || !email){
  //    return;
  //  }
  //   login(password, email)
  //   .then(()=>{
  //       //set logged in state to true via handleLogin
  //       history.push('/')
      
  //   })
  // }

  return (
    <UserForm
      formTitle="Log In"
      formText="Not a member yet? Sign up here!"
      formButton="Log in"
      onSubmit={handleLogin}
    />
  );
}

export default Login;
