import './Head.css';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import accountPic from '../../images/head__nav-account-pic.png';

function Head({context}) {
  const [isOpen, setIsOpen] = useState(false);

  const overlayClasses = isOpen ? "head__overlay" : "head__disable"; 
  return (
    <section className="head">
      <Logo/>
      <div className="head__open" onClick={() => setIsOpen(true)}></div>
      <div className={overlayClasses}>
        <nav className="head__nav-box">
        <div className="head__close" onClick={() => setIsOpen(false)}></div>
        <ul className="head__nav-list">
          <li className="head__nav-item head__nav-item_additional"><NavLink className="head__nav-link" to={context.main.to}>{context.main.title}</NavLink></li>
          <li className="head__nav-item"><NavLink className="head__nav-link" to={context.movies.to}>{context.movies.title}</NavLink></li>
          <li className="head__nav-item"><NavLink className="head__nav-link" to={context.savedMovies.to}>{context.savedMovies.title}</NavLink></li>
          <li className="head__nav-item"><NavLink className="head__nav-link head__nav-account" to={context.profile.to}><img className="head__nav-account-pic" src={accountPic} alt="Иконка профиля"/><p className="head__nav-account-text">{context.profile.title}</p></NavLink></li>
        </ul>
        </nav>
      </div>
    </section>
  )
}

export default Head;