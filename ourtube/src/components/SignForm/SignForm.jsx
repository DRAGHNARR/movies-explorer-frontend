import './SignForm.css';
import Logo from '../Logo/Logo';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';

function SignForm({context, onSubmit}) {
  const location = useLocation();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  
  function handlePasswordChange(event) {
    setPassword(event.target.value); 
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(email, password);
    history.push('/movies');
  } 

  return (
    <section className="sign">
      <Logo/>
      <h1 className="sign__title">{context.title}</h1>
      <form className="sign__form" name="sign" onSubmit={handleSubmit}>
        <div className="sign__form-box">
          <span className={location.pathname === "/signup" ? "sign__form-title" : "sign__disable"}>Имя</span>
          <input className={location.pathname === "/signup" ? "sign__form-input" : "sign__disable"} id="sign-name" name="name" type="text" placeholder=""></input>
          <span className="sign__form-title">E-mail</span>
          <input value={email} onChange={handleEmailChange} className="sign__form-input" id="sign-email" name="email" type="email" placeholder=""></input>
          <span className="sign__form-title">Пароль</span>
          <input value={password} onChange={handlePasswordChange} className="sign__form-input sign__error" id="sign-pass" name="pass" placeholder="" type="password"></input>
          <span className="sign__form-title sign__error">Что-то пошло не так...</span>
        </div>
        <input className="sign__form-submit" type="submit" value={context.submit}/>
      </form>
      <div className="sign__foot">
        <p className="sign__foot-description">{context.footDescription}</p>
        <Link className="sign__foot-route" to={context.footRouteTo}>{context.footRoute}</Link>
      </div>
    </section>
  )
}

export default SignForm;