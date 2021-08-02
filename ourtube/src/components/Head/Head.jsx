import './Head.css';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import accountPic from '../../images/head__nav-account-pic.png';

function Head({context}) {
  return (
    <section className="head">
      <Logo/>
      <ul className="head__nav-list">
        <li className="head__nav-item"><NavLink className="head__nav-link" to={context.movies.to}>{context.movies.title}</NavLink></li>
        <li className="head__nav-item"><NavLink className="head__nav-link" to={context.savedMovies.to}>{context.savedMovies.title}</NavLink></li>
        <li className="head__nav-item"><NavLink className="head__nav-link head__nav-account" to={context.profile.to}><img className="head__nav-account-pic" src={accountPic} alt="Иконка профиля"/><p className="head__nav-account-text">{context.profile.title}</p></NavLink></li>
      </ul>
    </section>
  )
}

export default Head;