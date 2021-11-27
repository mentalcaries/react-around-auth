import React from "react";
import UserForm from "./UserForm";

function Register({ password, setPassword, email, setEmail, handleSubmit }) {
  
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // function handleRegisterSubmit(userData){
  //   const {password, email} = userData;
  //   console.log(password)
  //   auth.register(password, email)
  // }

  // function handleSubmit() {
  //   register(password, email)
  //   .then((res) => {
  //     if(res){
  //       setIsNowRegistered(true);
  //       setIsInfoTooltipOpen(true);
  //       setTimeout(()=> {
  //         setIsInfoTooltipOpen(false);
  //         // setIsNowRegistered(false);
  //       }, 1500)
  //     }
  //     else{
  //       setIsNowRegistered(false);
  //       setIsInfoTooltipOpen(true)
  //     }
  //   })
  //   .catch(()=>{
  //     setIsNowRegistered(false);
  //     setIsInfoTooltipOpen(true);
  //     setTimeout(()=> {
  //       setIsInfoTooltipOpen(false);
  //       // setIsNowRegistered(false);
  //     }, 1000)
  //   })
  // }

  return (
    <UserForm
      formTitle="Sign Up"
      formText="Already a member? Log in here!"
      formButton="Sign Up"
      onSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}

export default Register;
