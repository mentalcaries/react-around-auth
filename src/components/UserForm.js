import React from 'react';

function UserForm({ formTitle, formText, formButton }) {
  return (
    <form className="user-form">
      <h2 className="user-form__title">{formTitle}</h2>
      <input
        className="user-form__field"
        type=""
        name=""
        required
        placeholder="Email"
      ></input>

      <input
        className="user-form__field"
        type="password"
        name="password"
        required
        placeholder="Password"
      ></input>

      <button className="user-form__button" type="submit" default="Log in">
        {formButton}
      </button>
      <p className="user-form__text">{formText}</p>
    </form>
  );
}

export default UserForm;
