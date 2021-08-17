import './Foot.css';

function Foot() {
  return (
    <footer className="foot">
      <h2 className="foot__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="foot__divider"></div>
      <div className="foot__box">
        <h3 className="foot__copy">© 2020</h3>
        <ul className="foot__nav-list">
          <li className="foot__nav-item"><a className="foot__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a></li>
          <li className="foot__nav-item"><a className="foot__link" href="https://github.com/">Github</a></li>
          <li className="foot__nav-item"><a className="foot__link" href="https://www.facebook.com/">Facebook</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Foot;