import React from 'react';
import UserForm from './UserForm';

function Login() {
  return (
    <UserForm
      formTitle="Log In"
      formText="Not a member yet? Sign up here!"
      formButton="Log in"
    />
  );
}

export default Login;
