import React from "react";
import UserForm from "./UserForm";


function Login({onSubmit}) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  // const history = useHistory()

  // function handleLoginSubmit({ password, email }) {
  //   if (!password || !email) {
  //     return;
  //   }
  //   authorise(password, email)
  //   .then((data) => {
  //     if(data.jwt){
  //      setPassword('')
  //      setEmail('')
  //      setIsloggedIn(true);
  //      history.push("/");
  //     }
  //   })
  //   .catch((err)=>console.log(err))
  //   setIsInfoTooltipOpen(true)
  //   setIsSuccess(false)
  // }


  return (
    <UserForm
      formTitle="Log In"
      formText="Not a member yet? Sign up here!"
      formButton="Log in"
      onSubmit={onSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default Login;
