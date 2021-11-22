import React from 'react';

function UserForm({ formTitle, formText, formButton, onSubmit }) {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  function handleEmailChange(evt){
    setEmail(evt.target.value)
  }

  function handlePasswordChange(evt){
    setPassword(evt.target.value)
  }

  function handleSubmit(evt){
    evt.preventDefault();
    onSubmit({
        password, 
        email
    })
  }

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2 className="user-form__title">{formTitle}</h2>
      <input
        className="user-form__field"
        type="email"
        name="email"
        required
        placeholder="Email"
        onChange={handleEmailChange}
        value={email.value}
      ></input>

      <input
        className="user-form__field"
        type="password"
        name="password"
        required
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
      ></input>

      <button className="user-form__button hover-animate" type="submit" default="Log in">
        {formButton}
      </button>
      <p className="user-form__text">{formText}</p>
    </form>
  );
}

export default UserForm;
