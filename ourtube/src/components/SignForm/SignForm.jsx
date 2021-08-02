import './SignForm.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function SignForm({context}) {
  return (
    <section className="sign">
      <Logo/>
      <h1 className="sign__title">{context.title}</h1>
      <form className="sign__form">
        <div className="sign__form-box">
          <span className="sign__form-title sign__invisible">Имя</span>
          <input className="sign__form-input sign__invisible" id="sign-name" name="name" type="text" placeholder=""></input>
          <span className="sign__form-title">E-mail</span>
          <input className="sign__form-input" id="sign-email" name="email" type="text" placeholder=""></input>
          <span className="sign__form-title">Пароль</span>
          <input className="sign__form-input sign__error" id="sign-pass" name="pass" type="text" placeholder=""></input>
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