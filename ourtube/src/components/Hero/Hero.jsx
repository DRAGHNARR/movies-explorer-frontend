import './Hero.css';
import Logo from '../Logo/Logo';
import heroBack from '../../images/hero__back.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import accountPic from '../../images/head__nav-account-pic.png';

function Hero({loggedIn, context}) {
  return (
    <section className="hero">
      <div className="hero__head">
        <Logo/>
        <ul className="hero__nav-head">
          <li className={loggedIn === 1 ? "hero__nav-head-button hero__nav-head-button__disable" : "hero__nav-head-button"}><NavLink className="hero__link" to="/signup">Регистрация</NavLink></li>
          <li className={loggedIn === 1 ? "hero__nav-head-button hero__nav-head-button__disable" : "hero__nav-head-button"}><NavLink className="hero__link hero__link_enrty" to="signin">Войти</NavLink></li>
          <li className={loggedIn !== 1 ? "hero__nav-head-button hero__nav-head-button__disable" : "hero__nav-head-button"}><NavLink className="hero__link" to={context.movies.to}>{context.movies.title}</NavLink></li>
          <li className={loggedIn !== 1 ? "hero__nav-head-button hero__nav-head-button__disable" : "hero__nav-head-button"}><NavLink className="hero__link" to={context.savedMovies.to}>{context.savedMovies.title}</NavLink></li>
          <li className={loggedIn !== 1 ? "hero__nav-head-button hero__nav-head-button__disable" : "hero__nav-head-button"}><NavLink className="hero__link hero__nav-account" to={context.profile.to}><img className="hero__nav-account-pic" src={accountPic} alt="Иконка профиля"/><p className="hero__nav-account-text">{context.profile.title}</p></NavLink></li>
        </ul>
      </div>
      <div className="hero__body">
        <div className="hero__frame">
          <img className="hero__back" src={heroBack} alt="Фоновая картинка"/>
        </div>
        <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
      </div>
      <div className="hero__foot">
        <ul className="hero__nav-foot">
          <li className="hero__nav-foot-button"><HashLink className="hero__link hero__link_foot" to="/#about">О проекте</HashLink></li>
          <li className="hero__nav-foot-button"><HashLink className="hero__link hero__link_foot" to="/#tech">Технологии</HashLink></li>
          <li className="hero__nav-foot-button"><HashLink className="hero__link hero__link_foot" to="/#student">Студент</HashLink></li>
        </ul>
      </div>
    </section>
  )
}

export default Hero;