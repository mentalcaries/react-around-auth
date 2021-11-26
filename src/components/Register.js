import UserForm from "./UserForm";

function Register({handleRegister}){

  // function handleRegisterSubmit(userData){
  //   const {password, email} = userData;
  //   console.log(password)
  //   auth.register(password, email)
  // }
  

  return(
<UserForm formTitle="Sign Up"
      formText="Already a member? Log in here!"
      formButton="Sign Up"
      onSubmit={handleRegister}
/>
  )
}

export default  Register