import './Hero.css';
import Logo from '../Logo/Logo';
import heroBack from '../../images/hero__back.png';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__head">
        <Logo/>
        <ul className="hero__nav-head">
          <li className="hero__nav-head-button"><NavLink className="hero__link" to="/signup">Регистрация</NavLink></li>
          <li className="hero__nav-head-button"><NavLink className="hero__link hero__link_enrty" to="signin">Войти</NavLink></li>
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