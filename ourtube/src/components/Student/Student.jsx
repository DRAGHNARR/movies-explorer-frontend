import './Student.css';
import Divider from '../Divider/Divider';
import Title from '../Title/Title';
import studentPhoto from "../../images/student__photo.png";

function Student() {
  return (
    <section className="student" id="student">
      <Title title={'Студент'}/>
      <Divider color={'black'}/>
      <figure className="student__about">
        <figcaption className="student__desctiption">
          <div className="student__desctiption-box">
            <h3 className="student__desctiption-title">Виталий</h3>
            <h4 className="student__desctiption-subtitle">Фронтенд-разработчик, 30 лет</h4>
            <p className="student__desctiption-about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          </div>
          <ul className="student__source-list">
            <li className="student__source-item"><a className="student__source" href="https://github.com/DRAGHNARR/">Facebook</a></li>
            <li className="student__source-item"><a className="student__source" href="https://github.com/DRAGHNARR/">Github</a></li>
          </ul>
        </figcaption>
        <img className="student__photo" src={studentPhoto} alt="Фото студента"/>
      </figure>
      <div className="student__portfolio">
        <h3 className="student__portfolio-title">Портфолио</h3>
        <ul className="student__portfolio-list">
          <li className="student__portfolio-item">
            <a className="student__portfolio-link" href="https://github.com/DRAGHNARR/russian-travel">
              <h4 className="student__portfolio-link-title">Статичный сайт</h4>
              <p className="student__portfolio-link-mark">↗</p>
            </a>
            <Divider color={'gray1'}/>
          </li>
          <li className="student__portfolio-item">
            <a className="student__portfolio-link" href="https://github.com/DRAGHNARR/react-mesto-auth">
              <h4 className="student__portfolio-link-title">Адаптивный сайт</h4>
              <p className="student__portfolio-link-mark">↗</p>
            </a>
            <Divider color={'gray1'}/>
          </li>
          <li className="student__portfolio-item">
            <a className="student__portfolio-link" href="https://github.com/DRAGHNARR/react-mesto-api-full">
              <h4 className="student__portfolio-link-title">Одностраничное приложение</h4>
              <p className="student__portfolio-link-mark">↗</p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Student;