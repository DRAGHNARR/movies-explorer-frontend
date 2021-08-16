import './Profile.css';
import React, { useState, useEffect } from 'react';
import { userContext } from '../../contexts/userContext';

function Profile({onSubmit, onExit}) {
  const user = React.useContext(userContext);

  const [name, setName] = useState({value: user.name, error: ""});
  const [email, setEmail] = useState({value: user.email, error: ""});
  const [isError, setIsError] = useState(false);

  function handleNameChange(event) {
    let error = "";
    if (event.target.value.length < 2 || event.target.value.length > 30) {
      error = "Имя должно быть от 2 до 30 символов.";
    }
      
    setName({
      value: event.target.value,
      error: error,
    });

    if (error !== "" || email.error !== "") {
      setIsError(true);
    }
    else {
      setIsError(false);
    }
  }

  function handleEmailChange(event) {
    let error = "";
    const re = /\S+@\S+\.\S+/;
    if (!re.test(event.target.value)) {
      error = "Некорректное значение поля E-mail.";
    }
      
    setEmail({
      value: event.target.value,
      error: error,
    });

    if (name.error !== "" || error !== "") {
      setIsError(true);
    }
    else {
      setIsError(false);
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(user.email, email.value, name.value);
  } 

  function handleExit(event) {
    onExit();
  }

  return (
    <section className="profile">
      <h1 className="profile__title">Привет, {name.value}!</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__box">
          <span className="profile__form-title">Имя</span>
          <input value={name.value} onChange={handleNameChange} className={name.error !== "" ? "profile__input profile__input_error" : "profile__input"} id="profile-name" name="name" type="text" placeholder=""></input>
        </div>
        <div className="profile__divider"></div>
        <div className="profile__box">
          <span className="profile__form-title">E-mail</span>
          <input value={email.value} onChange={handleEmailChange} className={email.error !== "" ? "profile__input profile__input_error" : "profile__input"} id="profile-email" name="email" type="text" placeholder="" value={email.value}></input>
        </div>
        <input className={isError ? "profile__eddit profile__eddit_error" : "profile__eddit"} type="submit" value="Редактировать" disabled={isError ? "true" : ""}></input>
      </form>
      <button className="profile__exit" onClick={handleExit}>Выйти из аккаунта</button>
    </section>
  )
}

export default Profile;