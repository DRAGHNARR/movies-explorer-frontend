import './Tech.css';
import Divider from '../Divider/Divider';
import Title from '../Title/Title';

function Tech () {
  return (
    <section className="tech" id="tech">
      <Title title={'Технологии'}/>
      <Divider color={'black'}/>
      <blockquote className="tech__description">
        <h3 className="tech__description-title">7 технологий</h3>
        <p className="tech__description-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </blockquote>
      <ul className="tech__stack-list">
        <li className="tech__stack-item"><h4 className="tech__stack-title">HTML</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">CSS</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">JS</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">React</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">Git</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">Express.js</h4></li>
        <li className="tech__stack-item"><h4 className="tech__stack-title">mongoDB</h4></li>
      </ul>
    </section>
  )
}

export default Tech;