import './Except.css';
import { Link } from 'react-router-dom';

function Except() {
  return (
    <section className="except">
      <h1 className="except__title">404</h1>
      <p className="except__description">Страница не найдена</p>
      <Link className="except__back" to="/">Назад</Link>
    </section>
  )
}

export default Except;