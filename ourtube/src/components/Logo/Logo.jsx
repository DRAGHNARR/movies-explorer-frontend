import './Logo.css';
import logo from '../../images/head__logo.png';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink to="/"><img className="logo" src={logo} alt="Лого"/></NavLink>
  )
}

export default Logo;