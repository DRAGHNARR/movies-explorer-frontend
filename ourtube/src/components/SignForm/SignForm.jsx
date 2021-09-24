import './SignForm.css';
import Logo from '../Logo/Logo';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

function SignForm({context, onSubmit}) {
  const location = useLocation();
  const history = useHistory();

  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [password, setPassword] = useState({});
  const [isError, setIsError] = useState(true);


  function handleNameChange(event) {
    let error = "";
    if (event.target.value.length < 2 || event.target.value.length > 30) {
      error = "Имя должно быть от 2 до 30 символов.";
    }
      
    setName({
      value: event.target.value,
      error: error,
    });

    if ((error !== "" && location.pathname === "/signup") || email.error !== "" || password.error !== "") {
      setIsError(true);
    }
    else {
      setIsError(false);
    }
  }

  function handleEmailChange(event) {
    let error = "";
    const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if (!re.test(event.target.value)) {
      error = "Некорректное значение поля E-mail.";
    }
      
    setEmail({
      value: event.target.value,
      error: error,
    });

    if ((name.error !== "" && location.pathname === "/signup") || error !== "" || password.error !== "") {
      setIsError(true);
    }
    else {
      setIsError(false);
    }
  }
  
  function handlePasswordChange(event) {
    let error = "";
    if (event.target.value.length < 8) {
      error = "Длинна пароля должна быть больше 8 символов.";
    }
      
    setPassword({
      value: event.target.value,
      error: error,
    });

    if ((name.error !== "" && location.pathname === "/signup") || email.error !== "" || error !== "") {
      setIsError(true);
    }
    else {
      setIsError(false);
    }
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({email: email.value, password: password.value, name: name.value});
  } 

  return (
    <section className="sign">
      <Logo/>
      <h1 className="sign__title">{context.title}</h1>
      <form className="sign__form" name="sign" onSubmit={handleSubmit}>
        <div className="sign__form-box">
          <span className={location.pathname === "/signup" ? "sign__form-title" : "sign__disable"}>Имя</span>
          <input value={name.value} onChange={handleNameChange} className={location.pathname === "/signup" ? (name.error !== "" ? "sign__form-input sign__error" : "sign__form-input") : "sign__disable"} id="sign-name" name="name" type="text" placeholder=""></input>
          <span className={"sign__form-title"}>E-mail</span>
          <input value={email.value} onChange={handleEmailChange} className={email.error !== "" ? "sign__form-input sign__error" : "sign__form-input"} id="sign-email" name="email" type="email" placeholder=""></input>
          <span className="sign__form-title">Пароль</span>
          <input value={password.value} onChange={handlePasswordChange} className={password.error !== "" ? "sign__form-input sign__error" : "sign__form-input"} id="sign-pass" name="pass" placeholder="" type="password"></input>
          <span className="sign__form-title sign__error">{name.error || email.error || password.error}</span>
        </div>
        <input className={isError ? "sign__form-submit sign__form-submit_error" : "sign__form-submit"} type="submit" value={context.submit} disabled={isError ? "true" : ""}/>
      </form>
      <div className="sign__foot">
        <p className="sign__foot-description">{context.footDescription}</p>
        <Link className="sign__foot-route" to={context.footRouteTo}>{context.footRoute}</Link>
      </div>
    </section>
  )
}

export default SignForm;