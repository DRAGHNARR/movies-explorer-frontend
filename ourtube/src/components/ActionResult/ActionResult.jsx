import './ActionResult.css';
import imageSuccess from '../../images/success.png';
import imageUnsuccess from '../../images/unsuccess.png';

function ActionResult ({enable, title, success}) {
    const image = success ? imageSuccess : imageUnsuccess;
    return (
        <section className={enable ? "action-result" : "action-result__disable"}>
            <figure className="action-result__frame">
                <figcaption className="action-result__title">{title}</figcaption>
                <img className="action-result__image" src={image} alt="Ответ"></img>
            </figure>
        </section>
    )
}

export default ActionResult;