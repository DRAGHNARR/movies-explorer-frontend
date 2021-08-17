import './About.css';
import Divider from '../Divider/Divider';
import Title from '../Title/Title';

function About() {
  return (
    <section className="about" id="about">
      <Title title={'О проекте'}/>
      <Divider color={'black'}/>
        <ul className="about__cards-list">
          <li className="about__cards-item">
            <blockquote className="about__card">
              <h3 className="about__card-title">Дипломный проект включал 5 этапов</h3>
              <p className="about__card-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </blockquote>
          </li>
          <li className="about__cards-item">
            <blockquote className="about__card">
              <h3 className="about__card-title">На выполнение диплома ушло 5 недель</h3>
              <p className="about__card-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </blockquote>
          </li>
        </ul>
        <ul className="about__graph-list">
          <li className="about__graph-item">
              <p className="about__graph-line">1 неделя</p>
              <h3 className="about__graph-title">Back-end</h3>
          </li>
          <li className="about__graph-item">
              <p className="about__graph-line">4 недели</p>
              <h3 className="about__graph-title">Front-end</h3>
          </li>
        </ul>
    </section>
  )
}

export default About;